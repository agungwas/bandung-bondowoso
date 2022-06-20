import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Teams } from '@/models/teams.model';
import csvReaderHelper from '@/helpers/csvReader.helper';


export default class CreateTeams implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    const data = await csvReaderHelper('/teams-data.csv')
      
    for (let a = 0; a < data.length; a++) {
      try {
        await connection
          .createQueryBuilder()
          .insert()
          .into(Teams)
          .values(data[a])
          .execute()
      } catch (error) {
        data[a].captain_id = data[a-1]?.captain_id || 8037
        await connection
          .createQueryBuilder()
          .insert()
          .into(Teams)
          .values(data[a])
          .execute()
      }
    }
  }
}