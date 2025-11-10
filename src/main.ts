import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";

// main.ts = entry point nya nestjs

// menjalankan server
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // run port 3000
    // validasi secara global
    // app.useGlobalPipes(
    //     new ValidationPipe({
    //         transform: true,
    //         whitelist: true,
    //         forbidNonWhitelisted: true,
    //     }),
    // );
    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

