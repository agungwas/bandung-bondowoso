import {
  GET_LEADERBOARD,
  ADD_LEADERBOARD,
} from 'store/leaderboard/actionTypes';
import { AddLeaderboard, GetLeaderboard } from './types';

export const getLeaderboard = {
  request: (payload: GetLeaderboard.RequestPayload = {}): GetLeaderboard.Request => ({
    type: GET_LEADERBOARD.REQUEST,
    payload
  }),
  success: (payload: GetLeaderboard.SuccessPayload): GetLeaderboard.Success => ({
    type: GET_LEADERBOARD.SUCCESS,
    payload,
  }),
  failure: (payload: GetLeaderboard.FailurePayload): GetLeaderboard.Failure => ({
    type: GET_LEADERBOARD.FAILURE,
    payload,
  })
}

export const addLeaderboard = {
  request: (data: AddLeaderboard.RequestPayload): AddLeaderboard.Request => ({
    type: ADD_LEADERBOARD.REQUEST,
    payload: data
  }),
  setShowModal: (data: boolean): AddLeaderboard.SetShowModal => ({
    type: ADD_LEADERBOARD.SET_SHOW_MODAL,
    payload: data
  }),
  success: (): AddLeaderboard.Success => ({
    type: ADD_LEADERBOARD.SUCCESS
  }),
  failure: (payload: AddLeaderboard.FailurePayload): AddLeaderboard.Failure => ({
    type: ADD_LEADERBOARD.FAILURE,
    payload,
  })
}
