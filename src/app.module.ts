import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { JwtModule } from '@nestjs/jwt';
config();
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.db_host,
    port: Number(process.env.db_port),
    username: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_name,
    synchronize: true,
    entities:[]
  }),
JwtModule.register({
  global: true,
  secret: process.env.jwt_secret,
}),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
