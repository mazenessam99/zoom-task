import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQuery';
import {
  LoginRequest,
  LoginResponse,
  User,
  RefreshResponse,
} from '../../types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({

    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/api/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    getMe: builder.query<User, void>({
      query: () => ({
        url: '/api/auth/me',
        method: 'GET',
      }),
      transformResponse: (response: { data: User }) => response.data,
    }),

    logout: builder.mutation<void, { refreshToken: string }>({
      query: (body) => ({
        url: '/api/auth/logout',
        method: 'POST',
        body,
      }),
    }),

    refreshToken: builder.mutation<RefreshResponse, { refreshToken: string }>({
      query: (body) => ({
        url: '/api/auth/refresh',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetMeQuery,
  useLogoutMutation,
  useRefreshTokenMutation,
} = authApi;