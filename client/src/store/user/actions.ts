import { GET_USER } from 'store/user/actionTypes';
import { GetUser } from 'store/user/types';


export const getUser = {
  request: (payload: GetUser.RequestPayload): GetUser.Request => ({
    type: GET_USER.REQUEST,
    payload
  }),
  success: (payload: GetUser.SuccessPayload): GetUser.Success => ({
    type: GET_USER.SUCCESS,
    payload,
  }),
  failure: (payload: GetUser.FailurePayload): GetUser.Failure => ({
    type: GET_USER.FAILURE,
    payload,
  }),
  setPagination: (payload: GetUser.PaginationPayload): GetUser.SetPagination => ({
    type: GET_USER.SET_PAGINATION,
    payload,
  })
}
