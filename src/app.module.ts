import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { JwtModule } from '@nestjs/jwt';
import { Card } from './entity/card.entity';
import { Columns } from './entity/column.entity';
import { User } from './entity/user.entity';
import { Comments } from './entity/comments.entity';
import { UsersModule } from './users/users.module';
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
    entities: [Card, Columns, User, Comments]
  }),
  JwtModule.register({
    global: true,
    secret: process.env.jwt_secret,
    signOptions: { expiresIn: '4d' },
  }),
    UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
