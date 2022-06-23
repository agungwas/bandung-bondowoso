import {
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_FAILURE,
  FETCH_TEAM_SUCCESS,
  FetchTeamRequest,
  FetchTeamSuccess,
  FetchTeamSuccessPayload,
  FetchTeamFailure,
  FetchTeamFailurePayload,
} from 'store/team/actionTypes';

export const fetchTeamRequest = (): FetchTeamRequest => ({
  type: FETCH_TEAM_REQUEST,
});

export const fetchTeamSuccess = (
  payload: FetchTeamSuccessPayload
): FetchTeamSuccess => ({
  type: FETCH_TEAM_SUCCESS,
  payload,
});

export const fetchTeamFailure = (
  payload: FetchTeamFailurePayload
): FetchTeamFailure => ({
  type: FETCH_TEAM_FAILURE,
  payload,
});
