import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserDto {

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6, { message: 'password must be at least 6 characters' })
    password: string;
}

export class LoginDto extends UserDto {

    @IsString()
    @IsNotEmpty()
    password: string;
 }