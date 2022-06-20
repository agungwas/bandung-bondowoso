import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class teams1655664932291 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'teams',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'captain_id',
            type: 'integer',
            isNullable: false
          },
          {
            name: 'logo',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'tournament_id',
            type: 'integer',
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

		await queryRunner.createForeignKeys('teams', [
			new TableForeignKey({
				columnNames: ['captain_id'],
				referencedColumnNames: ['id'],
				referencedTableName: 'users',
				onDelete: 'CASCADE'
			}),
			new TableForeignKey({
				columnNames: ['tournament_id'],
				referencedColumnNames: ['id'],
				referencedTableName: 'tournaments',
				onDelete: 'CASCADE'
			})
		])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('teams')
  }

}
