import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PgCoreType } from '../config/types.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<PgCoreType>('pgCore').hostPgCore,
        port: config.get<PgCoreType>('pgCore').portPgCore,
        database: config.get<PgCoreType>('pgCore').namePgCore,
        username: config.get<PgCoreType>('pgCore').userPgCore,
        password: config.get<PgCoreType>('pgCore').passPgCore,
        autoLoadEntities: true,
        synchronize: false, // NO TOCAS !!!!! NO TOCAR !!!!! PELIGRO
      }),
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
