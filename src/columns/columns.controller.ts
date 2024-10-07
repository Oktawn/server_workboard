import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { ColumnDto } from './columns.dto';

@Controller('columns')
export class ColumnsController {
    constructor(private readonly columnsService: ColumnsService) { }

    @Get(':id')
    async getColumns(@Param('id', ParseIntPipe) id: number) {
        return this.columnsService.getColumns(id);
    }

    @Post('create')
    @UseGuards(AuthGuard)
    async createColumn(@Req() req, @Body() column: ColumnDto) {
        return this.columnsService.createColumn({ userId: req.userId, name: column.name });
    }

    @Patch('update')
    @UseGuards(AuthGuard)
    async updateColumn(@Req() req, @Body() column: ColumnDto) {
        return this.columnsService.updateColumn({ userId: req.userId, name: column.name, columnId: column.columnId });
    }

    @Delete('delete')
    @UseGuards(AuthGuard)
    async deleteColumn(@Req() req, @Body() column: ColumnDto) {
        return this.columnsService.deleteColumn({ userId: req.userId, columnId: column.columnId });
    }
}
