import { ITournamentResult } from '@/interfaces/tournamentResults.interface';
import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Teams } from './teams.model';
import { Tournaments } from './tournaments.model';


class ModelRelations {
  @ManyToOne(() => Tournaments)
  @JoinColumn({ name: 'tournament_id' })
	tournament: Tournaments

  @ManyToOne(() => Teams)
  @JoinColumn({ name: 'team_id' })
  team: Teams
}


@Entity()
export class TournamentResults extends ModelRelations implements ITournamentResult  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  team_id: number;

  @Column()
  position: number;

  @Column()
  point: number;

  @Column()
  tournament_id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
	created_at: Date

	@Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
	updated_at: Date

	@DeleteDateColumn()
	deleted_at: Date
}
