export const FETCH_TOURNAMENT_REQUEST = 'FETCH_TOURNAMENT_REQUEST';
export const FETCH_TOURNAMENT_SUCCESS = 'FETCH_TOURNAMENT_SUCCESS';
export const FETCH_TOURNAMENT_FAILURE = 'FETCH_TOURNAMENT_FAILURE';

interface Database {
  id: number
  created_at: string
  updated_at: string
  deleted_at: null | string
}

export interface ITournament extends Database {
  title: string;
  start_date: Date;
  end_date: Date;
  team_count: number;
  slot: number;
}

export interface TournamentState {
  pending: boolean;
  data: ITournament[];
  error: string | null;
}

export interface FetchTournamentSuccessPayload {
  tournaments: ITournament[];
}

export interface FetchTournamentFailurePayload {
  error: string;
}

export interface FetchTournamentRequest {
  type: typeof FETCH_TOURNAMENT_REQUEST;
}

export type FetchTournamentSuccess = {
  type: typeof FETCH_TOURNAMENT_SUCCESS;
  payload: FetchTournamentSuccessPayload;
};

export type FetchTournamentFailure = {
  type: typeof FETCH_TOURNAMENT_FAILURE;
  payload: FetchTournamentFailurePayload;
};

export type TournamentActions =
  | FetchTournamentRequest
  | FetchTournamentSuccess
  | FetchTournamentFailure;
