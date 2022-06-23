export enum FETCH_LEADERBOARD {
  REQUEST = 'FETCH_LEADERBOARD_REQUEST',
  SUCCESS = 'FETCH_LEADERBOARD_SUCCESS',
  FAILURE = 'FETCH_LEADERBOARD_FAILURE',
}
export enum ADD_LEADERBOARD {
  REQUEST = 'ADD_LEADERBOARD_REQUEST',
  SUCCESS = 'ADD_LEADERBOARD_SUCCESS',
  FAILURE = 'ADD_LEADERBOARD_FAILURE',
}

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

interface TeamData extends Database {
  name: string
  captain_id: number
  logo: string
  tournament_id: 112,
  members?: MemberData[]
  captain?: UserData
}

export interface ILeaderboard extends Database {
  team_id: number
  position: number
  point: number
  tournament_id: number
  team?: TeamData
}

export interface LeaderboardState {
  pending: boolean;
  data: ILeaderboard[];
  error: string | null;
}

export declare namespace FetchLeaderboard {
  export interface SuccessPayload {
    leaderboards: ILeaderboard[];
  }

  export interface FailurePayload {
    error: string;
  }

  export interface Request {
    type: typeof FETCH_LEADERBOARD.REQUEST;
  }

  export type Success = {
    type: typeof FETCH_LEADERBOARD.SUCCESS;
    payload: FetchLeaderboard.SuccessPayload;
  }

  export type Failure = {
    type: typeof FETCH_LEADERBOARD.FAILURE;
    payload: FetchLeaderboard.FailurePayload;
  }
}



export declare namespace AddLeaderboard {
  interface SuccessPayload {
    message: string
  }

  interface FailurePayload extends AddLeaderboard.SuccessPayload {}

  interface Success {
    type: typeof ADD_LEADERBOARD.SUCCESS
    payload: AddLeaderboard.SuccessPayload
  }

  interface Failure {
    type: typeof ADD_LEADERBOARD.FAILURE;
    payload: AddLeaderboard.FailurePayload;
  }

  interface Request {
    type: typeof ADD_LEADERBOARD.REQUEST;
  }
}

export type LeaderboardActions = 
  | AddLeaderboard.Failure
  | AddLeaderboard.Success
  | AddLeaderboard.Request
  | FetchLeaderboard.Failure
  | FetchLeaderboard.Success
  | FetchLeaderboard.Request
