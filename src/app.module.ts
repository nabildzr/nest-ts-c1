import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import UsersService from "./users/users.service";
import {UsersController} from "./users/users.controller";

// root yang menyatukan semua bagian aplikasinya


@Module({
  imports: [UsersModule], // module lain yang bisa di import disini
  controllers: [AppController, UsersController], // daftar controller yang di pake
  providers: [AppService, UsersService], //  daftar service atau provider yang di pake
})
export class AppModule {}

// nantinya setiap fitur punya module sendiri (di pisah pisah), terus di import disini (AppModule)