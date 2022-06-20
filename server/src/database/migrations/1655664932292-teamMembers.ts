import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class teamMembers1655664932292 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'team_members',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'user_id',
            type: 'integer',
            isNullable: false
          },
          {
            name: 'team_id',
            type: 'integer',
            isNullable: false
          },
          {
            name: 'roles',
            type: 'varchar',
            isNullable: true,
            enum: ['CAPTAIN', 'MEMBER', 'STANDIN']
          },
          {
            name: 'ingame_id',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'created_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'updated_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'deleted_at',
            type: 'datetime',
            isNullable: true
          }
        ]
      }),
      true
    )

		await queryRunner.createForeignKeys('team_members', [
			new TableForeignKey({
				columnNames: ['user_id'],
				referencedColumnNames: ['id'],
				referencedTableName: 'users',
				onDelete: 'CASCADE'
			}),
			new TableForeignKey({
				columnNames: ['team_id'],
				referencedColumnNames: ['id'],
				referencedTableName: 'teams',
				onDelete: 'CASCADE'
			})
		])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('team_members')
  }

}
