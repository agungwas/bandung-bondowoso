import { ITeam } from '@/interfaces/teams.interface';
import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Users } from '@models/users.model';
import { TeamMembers } from './teamMembers.model';

class ModelRelations {
  @ManyToOne(() => Users)
	@JoinColumn({ name: 'captain_id' })
	captain: Users

  @OneToMany(() => TeamMembers, teamMember => teamMember.team)
  members: TeamMembers[]
}

@Entity()
export class Teams extends ModelRelations implements ITeam {
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

