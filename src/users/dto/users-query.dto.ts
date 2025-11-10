
import { IsOptional, IsString, IsInt } from 'class-validator';
import {Type} from "class-transformer";

export class UsersQueryDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @Type(() => Number) // ubah string to number
    @IsInt()
    age?: number;
}