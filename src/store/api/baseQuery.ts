import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { RootState } from '../index';
import { setCredentials, logout } from '../authSlice';

const mutex = new Mutex();

const rawBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  let result = await rawBaseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshToken = (api.getState() as RootState).auth.refreshToken;
        if (!refreshToken) {
          api.dispatch(logout());
          return result;
        }

        const refreshResult = await rawBaseQuery(
          { url: '/api/auth/refresh', method: 'POST', body: { refreshToken } },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          const response = refreshResult.data as {
            data: { accessToken: string; refreshToken: string }
          };
          const { accessToken, refreshToken } = response.data; 
          const user = (api.getState() as RootState).auth.user;
          api.dispatch(setCredentials({ accessToken, refreshToken, user: user! }));
          result = await rawBaseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await rawBaseQuery(args, api, extraOptions);
    }
  }

  return result;
};
