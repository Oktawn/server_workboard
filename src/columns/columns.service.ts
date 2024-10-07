import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Columns } from 'src/entity/column.entity';
import { Repository } from 'typeorm';
import { ColumnDeleteDto, ColumnCreateDto, ColumnUpdateDto } from './columns.dto';

@Injectable()
export class ColumnsService {
    constructor(@InjectRepository(Columns) private columnsRepository: Repository<Columns>) { }

    async getColumns(id: number) {
        return await this.columnsRepository.find({ where: { user: { id: id } } });
    }

    async createColumn(newColumn: ColumnCreateDto) {
        if (newColumn.name === "")
            throw new BadRequestException('Column name is required');
        const column = this.columnsRepository.create({ name: newColumn.name, user: { id: newColumn.userId } });
        return await this.columnsRepository.save(column);
    }

    async updateColumn(newColumn: ColumnUpdateDto) {
        const isMatch = await this.columnsRepository.findOne({ where: { id: newColumn.columnId, user: { id: newColumn.userId } } });
        if (!isMatch)
            throw new BadRequestException('Column not found');
        return await this.columnsRepository.save({ id: newColumn.columnId, name: newColumn.name });

    }

    async deleteColumn(deleteColum: ColumnDeleteDto) {
        const isMatch = await this.columnsRepository.findOne({ where: { id: deleteColum.columnId, user: { id: deleteColum.userId } } });
        if (!isMatch)
            throw new BadRequestException('Column not found');
        return await this.columnsRepository.delete(deleteColum.columnId);
    }

}
