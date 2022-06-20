import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Tournaments } from '@/models/tournaments.model';
import csvReaderHelper from '@/helpers/csvReader.helper';


export default class CreateTournaments implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    const data = await csvReaderHelper(__dirname + '/tournament-data.csv')

    await connection
			.createQueryBuilder()
			.insert()
			.into(Tournaments)
			.values(data)
      .execute()
  }
}