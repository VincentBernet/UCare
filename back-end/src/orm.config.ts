import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: '127.0.0.1',
  database: 'ucare-db',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  username: 'postgres',
  password: 'password',
};

export const TypeOrmModuleConfigured = TypeOrmModule.forRoot(config);
