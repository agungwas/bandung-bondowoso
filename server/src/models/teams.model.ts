// import { ITournament } from '@/interfaces/tournament.interface';
import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Users } from '@models/users.model';

class ModelRelations {
  @ManyToOne(() => Users)
	@JoinColumn({ name: 'captain_id' })
	captain: Users
}

@Entity()
export class Teams extends ModelRelations /* implements ITournament */ {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  captain_id: number;

  @Column()
  logo: string;

  @Column()
  tournament_id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
	created_at: Date

	@Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
	updated_at: Date

	@DeleteDateColumn()
	deleted_at: Date
}

