import {Injectable} from '@nestjs/common';
import {UserCreateDto} from "./dto/user-create.dto";

export interface User {
    id: number,
    name: string,
    age: number
}

@Injectable()
export class UsersService {
   private users: User[] = []

    create(data: UserCreateDto) {
       const newUser = { id: Date.now(), ...data};
        this.users.push(newUser)
        return newUser
    }

    findAll() {
       return this.users
    }

    findOne(id: number) {
       return this.users.find(u => id === u.id)
    }



}

export default UsersService
