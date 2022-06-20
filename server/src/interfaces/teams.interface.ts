export interface ITeam {
  readonly id: number;

  readonly name: string;

  readonly captain_id: number;

  readonly logo: string;

  readonly tournament_id: number;

  readonly created_at: Date

	readonly updated_at: Date

	readonly deleted_at: Date
}

