// import {UserCreateDto} from "./user-create.dto";
import {PartialType} from "@nestjs/graphql";
import {UserCreateDto} from "./user-create.dto";

export class UpdateUserDto extends PartialType(UserCreateDto) {}