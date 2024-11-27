import { NestFactory } from '@nestjs/core';
import { SocialMediaSchedulerModule } from './social-media-scheduler.module';

async function bootstrap() {
  const app = await NestFactory.create(SocialMediaSchedulerModule);

  // CORS 설정 추가
  app.enableCors({
    origin: ['http://localhost:3000'], // 허용할 프론트엔드의 출처
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 허용할 HTTP 메서드
    credentials: true, // 쿠키를 허용하려면 true로 설정
  });

  await app.listen(5001);
}
bootstrap();
