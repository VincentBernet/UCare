import { IsEmail, IsNotEmpty, IsNumber, IsAlphanumeric } from 'class-validator';

export class jwtUserDataDto {
    @IsNumber()
    @IsNotEmpty()
    sub: number;

    @IsEmail()
    @IsNotEmpty()
    mail: string;


}