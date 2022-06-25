import {
  GET_LEADERBOARD,
  ADD_LEADERBOARD,
  REMOVE_LEADERBOARD,
  EDIT_LEADERBOARD,
} from 'store/leaderboard/actionTypes';
import { AddLeaderboard, EditLeaderboard, GetLeaderboard, RemoveLeaderboard } from 'store/leaderboard/types';

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
  setConfirmModal: (data: number): RemoveLeaderboard.SetSelectedId => ({
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

export const editLeaderboard = {
  request: (data: EditLeaderboard.SetSelectedDataPayload | null): EditLeaderboard.Request => ({
    type: EDIT_LEADERBOARD.REQUEST,
    payload: data
  }),
  setShowEditModal: (data: EditLeaderboard.SetSelectedDataPayload | null): EditLeaderboard.SetSelectedData => ({
    type: EDIT_LEADERBOARD.SET_SELECTED_DATA,
    payload: data
  }),
  success: (): EditLeaderboard.Success => ({
    type: EDIT_LEADERBOARD.SUCCESS
  }),
  failure: (payload: EditLeaderboard.FailurePayload): EditLeaderboard.Failure => ({
    type: EDIT_LEADERBOARD.FAILURE,
    payload,
  })
}
