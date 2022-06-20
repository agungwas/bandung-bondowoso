export interface ITournament {
  readonly id: number;

  readonly title: string;

  readonly start_date: Date;

  readonly end_date: Date;

  readonly team_count: number;

  readonly slot: number;

  readonly created_at: Date;

  readonly updated_at: Date;

  readonly deleted_at: Date;
}
