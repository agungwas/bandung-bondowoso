import {
  FetchLeaderboard,
  FETCH_LEADERBOARD,
  AddLeaderboard,
  ADD_LEADERBOARD,
} from 'store/leaderboard/actionTypes';

export const fetchLeaderboard = {
  request: (): FetchLeaderboard.Request => ({
    type: FETCH_LEADERBOARD.REQUEST,
  }),
  success: (payload: FetchLeaderboard.SuccessPayload): FetchLeaderboard.Success => ({
    type: FETCH_LEADERBOARD.SUCCESS,
    payload,
  }),
  failure: (payload: FetchLeaderboard.FailurePayload): FetchLeaderboard.Failure => ({
    type: FETCH_LEADERBOARD.FAILURE,
    payload,
  })
}

export const addLeaderboard = {
  request: (data: AddLeaderboard.RequestPayload): AddLeaderboard.Request => ({
    type: ADD_LEADERBOARD.REQUEST,
    payload: data
  }),
  success: (payload: AddLeaderboard.SuccessPayload): AddLeaderboard.Success => ({
    type: ADD_LEADERBOARD.SUCCESS,
    payload,
  }),
  failure: (payload: AddLeaderboard.FailurePayload): AddLeaderboard.Failure => ({
    type: ADD_LEADERBOARD.FAILURE,
    payload,
  })
}
