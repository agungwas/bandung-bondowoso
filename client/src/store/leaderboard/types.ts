import { ADD_LEADERBOARD, GET_LEADERBOARD, REMOVE_LEADERBOARD } from 'store/leaderboard/actionTypes'

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
  get: {
    loading: boolean,
    data: ILeaderboard[],
    error: null | string,
  },
  add: {
    loading: boolean, 
    error: null | string,
    showModal: boolean
  }
  remove: {
    loading: boolean, 
    error: null | string,
    selectedId: number
  }
}

export declare namespace GetLeaderboard {
  interface SuccessPayload {
    leaderboards: ILeaderboard[];
  }

  interface FailurePayload {
    message: string;
  }

  interface RequestPayload {
    tournament_result_id?: number;
    tournament_id?: number;
  }

  type Request = {
    type: typeof GET_LEADERBOARD.REQUEST;
    payload: RequestPayload
  }

  type Success = {
    type: typeof GET_LEADERBOARD.SUCCESS;
    payload: GetLeaderboard.SuccessPayload;
  }

  type Failure = {
    type: typeof GET_LEADERBOARD.FAILURE;
    payload: GetLeaderboard.FailurePayload;
  }
}

export declare namespace AddLeaderboard {
  interface FailurePayload {
    message: string;
  }

  interface RequestPayload {
    team_id: number
    position: number
    tournament_id: number
  }

  type Success = {
    type: typeof ADD_LEADERBOARD.SUCCESS
  }

  type Failure = {
    type: typeof ADD_LEADERBOARD.FAILURE;
    payload: AddLeaderboard.FailurePayload;
  }

  type Request = {
    type: typeof ADD_LEADERBOARD.REQUEST;
    payload: AddLeaderboard.RequestPayload
  }

  type SetShowModal = {
    type: typeof ADD_LEADERBOARD.SET_SHOW_MODAL;
    payload: boolean
  }
}

export declare namespace RemoveLeaderboard {
  interface FailurePayload {
    message: string;
    selectedId: number;
  }

  interface RequestPayload {
    tournament_result_id: number;
  }

  type Success = {
    type: typeof REMOVE_LEADERBOARD.SUCCESS;
  }

  type Failure = {
    type: typeof REMOVE_LEADERBOARD.FAILURE;
    payload: RemoveLeaderboard.FailurePayload;
  }

  type Request = {
    type: typeof REMOVE_LEADERBOARD.REQUEST;
    payload: RemoveLeaderboard.RequestPayload
  }

  type SetSelectedId = {
    type: typeof REMOVE_LEADERBOARD.SET_SELECTED_ID;
    payload: number
  }
}

export type LeaderboardActions = 
  | AddLeaderboard.Failure
  | AddLeaderboard.Success
  | AddLeaderboard.Request
  | AddLeaderboard.SetShowModal
  | GetLeaderboard.Failure
  | GetLeaderboard.Success
  | GetLeaderboard.Request
  | RemoveLeaderboard.Failure
  | RemoveLeaderboard.Success
  | RemoveLeaderboard.Request
  | RemoveLeaderboard.SetSelectedId
