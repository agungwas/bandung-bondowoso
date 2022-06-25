import { GET_TEAM } from 'store/team/actionTypes';
import { GetTeam } from 'store/team/types';


export const getTeam = {
  request: (payload: GetTeam.RequestPayload): GetTeam.Request => ({
    type: GET_TEAM.REQUEST,
    payload
  }),
  success: (payload: GetTeam.SuccessPayload): GetTeam.Success => ({
    type: GET_TEAM.SUCCESS,
    payload,
  }),
  failure: (payload: GetTeam.FailurePayload): GetTeam.Failure => ({
    type: GET_TEAM.FAILURE,
    payload,
  }),
  setPagination: (payload: GetTeam.PaginationPayload): GetTeam.SetPagination => ({
    type: GET_TEAM.SET_PAGINATION,
    payload,
  }),
  setTournamentId: (payload: number): GetTeam.SetTournamentId => ({
    type: GET_TEAM.SET_TOURNAMENT_ID,
    payload,
  })
}
