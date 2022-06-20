import { ITournament } from '@/interfaces/tournament.interface';
import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn } from 'typeorm';


@Entity()
export class Tournaments implements ITournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;

  @Column()
  team_count: number;

  @Column()
  slot: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
	created_at: Date

	@Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
	updated_at: Date

	@DeleteDateColumn()
	deleted_at: Date
}
