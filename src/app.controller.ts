import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//* tempat untuk mengatur men-definisikan route dan request handler (http)


@Controller() // ini adalah route pertama yaitu '/
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // method get route "/"
  getHello(): string {
    return this.appService.getHello();
  }
}
