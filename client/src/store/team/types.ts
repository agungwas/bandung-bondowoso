import { GET_TEAM } from 'store/team/actionTypes'

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
  point: number | null
  tournament_name: string
  tournament_id: number
  members?: MemberData[]
  captain?: UserData
}

export interface TeamState {
  pending: boolean;
  data: ITeam[];
  error: string | null;
  pagination?: GetTeam.PaginationPayload;
  tournament_id: number;
}

export declare namespace GetTeam {
  interface SuccessPayload {
    teams: ITeam[];
    pagination?: PaginationPayload;
  }
  
  interface FailurePayload {
    error: string;
  }

  interface PaginationPayload {
    page?: number;
    totalPage?: number;
    totalData?: number;
    limit?: number;
    search?: string;
  }

  interface RequestPayload {
    pagination?: PaginationPayload;
    tournament_id?: number;
  }
  
  type Request = {
    type: typeof GET_TEAM.REQUEST;
    payload: GetTeam.RequestPayload;
  }
  
  type Success = {
    type: typeof GET_TEAM.SUCCESS;
    payload: GetTeam.SuccessPayload;
  };
  
  type Failure = {
    type: typeof GET_TEAM.FAILURE;
    payload: GetTeam.FailurePayload;
  };

  type SetPagination = {
    type: typeof GET_TEAM.SET_PAGINATION;
    payload: GetTeam.PaginationPayload;
  }

  type SetTournamentId = {
    type: typeof GET_TEAM.SET_TOURNAMENT_ID;
    payload: number;
  }
}

export type TeamActions =
  | GetTeam.Request
  | GetTeam.Success
  | GetTeam.Failure
  | GetTeam.SetPagination
