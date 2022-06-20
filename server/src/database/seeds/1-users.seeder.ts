import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Users } from '@/models/users.model';
import csvReaderHelper from '@/helpers/csvReader.helper';


export default class CreateUsers implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    const data = await csvReaderHelper('/users-data.csv')

    await connection
			.createQueryBuilder()
			.insert()
			.into(Users)
			.values(data)
      .execute()
  }
}