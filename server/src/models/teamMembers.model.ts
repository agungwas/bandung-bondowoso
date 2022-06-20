// import { ITournament } from '@/interfaces/tournament.interface';
import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Teams } from './teams.model';
import { Users } from './users.model';

class ModelRelations {
  @ManyToOne(() => Users)
  @JoinColumn({ name: 'user_id' })
	user: Users

  @ManyToOne(() => Teams)
  @JoinColumn({ name: 'team_id' })
  team: Teams
}

@Entity()
export class TeamMembers extends ModelRelations /* implements ITournament */ {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  team_id: number;

  @Column({ type: 'simple-enum', enum: ['CAPTAIN', 'MEMBER', 'STANDIN'], default: 'MEMBER' })
  roles: 'CAPTAIN' | 'MEMBER' | 'STANDIN';

  @Column()
  ingame_id: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
	created_at: Date

	@Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
	updated_at: Date

	@DeleteDateColumn()
	deleted_at: Date
}

