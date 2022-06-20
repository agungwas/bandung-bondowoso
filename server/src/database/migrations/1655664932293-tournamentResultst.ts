import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class tournament_results1655664932293 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tournament_results',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'team_id',
            type: 'integer',
            isNullable: false
          },
          {
            name: 'position',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'point',
            type: 'integer',
            isNullable: false,
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

    
		await queryRunner.createForeignKeys('tournament_results', [
			new TableForeignKey({
				columnNames: ['tournament_id'],
				referencedColumnNames: ['id'],
				referencedTableName: 'tournaments',
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
    await queryRunner.dropTable('tournament_results')
  }

}
