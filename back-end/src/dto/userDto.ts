import { credentialDto } from "./credentialDto";
import { IsEmail, IsNotEmpty, IsNumber, IsAlphanumeric, IsOptional } from 'class-validator';

export class userDto extends credentialDto{
    @IsNumber()
    @IsOptional()
    userId?: number;

    @IsAlphanumeric()
    username: string;
}