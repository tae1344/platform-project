import { NestFactory } from '@nestjs/core';
import { SocialMediaSchedulerModule } from './social-media-scheduler.module';

async function bootstrap() {
  const app = await NestFactory.create(SocialMediaSchedulerModule);
  await app.listen(3000);
}
bootstrap();
