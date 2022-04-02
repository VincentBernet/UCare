import { IsEmail, IsNotEmpty, IsAlphanumeric } from 'class-validator';

export class credentialDto {
    @IsEmail()
    @IsNotEmpty()
    mail: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    password: string;
}