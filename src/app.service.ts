import {Injectable} from '@nestjs/common';

// tempat menyimpan business logic aplikasi

@Injectable() // menandakan bahwa class ini dapat di inject/import ke controller atau service lain melalui dependency injection
export class AppService {
    //   fn
    getHello(): string {
        // rn
        return 'Hello World!';
    }
}

// service ini bisa di inject ke controller atau service lain
// atau service ini bisa di import ke controller atau service lain