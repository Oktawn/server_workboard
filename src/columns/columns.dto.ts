import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ColumnDto {

    userId?: number;
    name?: string;
    columnId?: number;

}

export class ColumnCreateDto extends ColumnDto {

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsString()
    @IsNotEmpty()
    name: string
}

export class ColumnUpdateDto extends ColumnCreateDto {
    @IsNumber()
    @IsNotEmpty()
    columnId: number
}

export class ColumnDeleteDto extends ColumnDto {

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    columnId: number
}





