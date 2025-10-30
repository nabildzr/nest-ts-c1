import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// main.ts = entry point nya nestjs

// menjalankan server
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // run port 3000
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

