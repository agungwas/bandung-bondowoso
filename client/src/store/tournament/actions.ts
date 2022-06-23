import {
  FETCH_TOURNAMENT_REQUEST,
  FETCH_TOURNAMENT_FAILURE,
  FETCH_TOURNAMENT_SUCCESS,
  FetchTournamentRequest,
  FetchTournamentSuccess,
  FetchTournamentSuccessPayload,
  FetchTournamentFailure,
  FetchTournamentFailurePayload,
} from 'store/tournament/actionTypes';

export const fetchTournamentRequest = (): FetchTournamentRequest => ({
  type: FETCH_TOURNAMENT_REQUEST,
});

export const fetchTournamentSuccess = (
  payload: FetchTournamentSuccessPayload
): FetchTournamentSuccess => ({
  type: FETCH_TOURNAMENT_SUCCESS,
  payload,
});

export const fetchTournamentFailure = (
  payload: FetchTournamentFailurePayload
): FetchTournamentFailure => ({
  type: FETCH_TOURNAMENT_FAILURE,
  payload,
});
