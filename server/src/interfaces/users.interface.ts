export interface IUser {
  readonly id: number;

  readonly email: string;

  readonly name: string;

  readonly coin: number;

  readonly picture: string;

  readonly created_at: Date;

  readonly updated_at: Date;

  readonly deleted_at: Date;
}

