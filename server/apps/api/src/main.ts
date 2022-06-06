import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  // 유효성 검사
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // 타입을 받아서 넘겨줄 때 자동으로 타입 변환 시켜줌
    }),
  await app.listen(5000);
}
bootstrap();
