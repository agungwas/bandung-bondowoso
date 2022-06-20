module.exports = {
  type: 'sqlite',
  database: process.env.DATABASE_PATH,
  synchronize: false,
  logging: false,
  migrations: ['src/database/migrations/*.ts'],
  entities: ['src/models/*.model.ts'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/database/migrations'
  },
  seeds: ['src/database/seeds/*.seeder.{ts,js}'],
  factories: ['src/database/factories/*.factory.{ts,js}'],
}
