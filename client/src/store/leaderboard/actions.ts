import {
  GET_LEADERBOARD,
  ADD_LEADERBOARD,
  REMOVE_LEADERBOARD,
} from 'store/leaderboard/actionTypes';
import { AddLeaderboard, GetLeaderboard, RemoveLeaderboard } from 'store/leaderboard/types';

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

export const removeLeaderboard = {
  request: (data: RemoveLeaderboard.RequestPayload): RemoveLeaderboard.Request => ({
    type: REMOVE_LEADERBOARD.REQUEST,
    payload: data
  }),
  setShowModal: (data: number): RemoveLeaderboard.SetSelectedId => ({
    type: REMOVE_LEADERBOARD.SET_SELECTED_ID,
    payload: data
  }),
  success: (): RemoveLeaderboard.Success => ({
    type: REMOVE_LEADERBOARD.SUCCESS
  }),
  failure: (payload: RemoveLeaderboard.FailurePayload): RemoveLeaderboard.Failure => ({
    type: REMOVE_LEADERBOARD.FAILURE,
    payload,
  })
}
