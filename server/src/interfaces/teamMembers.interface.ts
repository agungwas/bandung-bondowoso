export interface ITeamMember {
  readonly id: number;

  readonly user_id: number;

  readonly team_id: number;

  readonly roles: 'CAPTAIN' | 'MEMBER' | 'STANDIN';

  readonly ingame_id: string;

  readonly created_at: Date

  readonly updated_at: Date

  readonly deleted_at: Date
}

