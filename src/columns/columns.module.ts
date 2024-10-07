import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Columns } from 'src/entity/column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Columns])],
  providers: [ColumnsService],
  controllers: [ColumnsController]
})
export class ColumnsModule { }
