import { GET_USER } from 'store/user/actionTypes'

interface Database {
  id: number
  created_at: string
  updated_at: string
  deleted_at: null | string
}

export interface IUser extends Database {
  email: string
  name: string
  coin: number
  picture: string
}

export interface UserState {
  pending: boolean;
  data: IUser[];
  error: string | null;
  pagination?: GetUser.PaginationPayload;
}

export declare namespace GetUser {
  interface SuccessPayload {
    users: IUser[];
    pagination?: PaginationPayload;
  }
  
  interface FailurePayload {
    error: string;
  }

  interface PaginationPayload {
    page?: number;
    totalPage?: number;
    totalData?: number;
    limit?: number;
    search?: string;
  }

  interface RequestPayload {
    pagination?: PaginationPayload;
  }
  
  type Request = {
    type: typeof GET_USER.REQUEST;
    payload: GetUser.RequestPayload;
  }
  
  type Success = {
    type: typeof GET_USER.SUCCESS;
    payload: GetUser.SuccessPayload;
  };
  
  type Failure = {
    type: typeof GET_USER.FAILURE;
    payload: GetUser.FailurePayload;
  };

  type SetPagination = {
    type: typeof GET_USER.SET_PAGINATION;
    payload: GetUser.PaginationPayload;
  }
}

export type UserActions =
  | GetUser.Request
  | GetUser.Success
  | GetUser.Failure
  | GetUser.SetPagination
