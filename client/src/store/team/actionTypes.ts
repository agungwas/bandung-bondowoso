export const FETCH_TEAM_REQUEST = 'FETCH_TEAM_REQUEST';
export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS';
export const FETCH_TEAM_FAILURE = 'FETCH_TEAM_FAILURE';

interface Database {
  id: number
  created_at: string
  updated_at: string
  deleted_at: null | string
}

interface UserData extends Database {
  email: string
  name: string
  coin: number
  picture: string
}

interface MemberData extends Database {
  user_id: number
  team_id: number
  roles: string
  ingame_id: string
  user?: UserData
} 

export interface ITeam extends Database {
  name: string
  captain_id: number
  logo: string
  tournament_id: 112,
  members?: MemberData[]
  captain?: UserData
}

export interface TeamState {
  pending: boolean;
  data: ITeam[];
  error: string | null;
}

export interface FetchTeamSuccessPayload {
  teams: ITeam[];
}

export interface FetchTeamFailurePayload {
  error: string;
}

export interface FetchTeamRequest {
  type: typeof FETCH_TEAM_REQUEST;
}

export type FetchTeamSuccess = {
  type: typeof FETCH_TEAM_SUCCESS;
  payload: FetchTeamSuccessPayload;
};

export type FetchTeamFailure = {
  type: typeof FETCH_TEAM_FAILURE;
  payload: FetchTeamFailurePayload;
};

export type TeamActions =
  | FetchTeamRequest
  | FetchTeamSuccess
  | FetchTeamFailure;
