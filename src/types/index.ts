export type UserType = 'SUPER_ADMIN' | 'MARKETER';

export interface User {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  userType: UserType;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export type LoginResponse = {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    user: User;
  };
};

export interface RefreshRequest {
  refreshToken: string;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ApiError {
  status: number;
  data: {
    message: string;
    statusCode?: number;
  };
}