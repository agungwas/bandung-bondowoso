// import { ITournament } from '@/interfaces/tournament.interface';
import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn } from 'typeorm';


@Entity()
export class Users /* implements ITournament */ {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  coin: number;

  @Column()
  picture: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
	created_at: Date

	@Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
	updated_at: Date

	@DeleteDateColumn()
	deleted_at: Date
}

