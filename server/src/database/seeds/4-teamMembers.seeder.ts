import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { TeamMembers } from '@/models/teamMembers.model';
import csvReaderHelper from '@/helpers/csvReader.helper';


export default class CreateTeamMembers implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {    
    const data = await csvReaderHelper(__dirname + '/teams-member-data.csv')

    await connection
			.createQueryBuilder()
			.insert()
			.into(TeamMembers)
			.values(data)
      .execute()
  }
}