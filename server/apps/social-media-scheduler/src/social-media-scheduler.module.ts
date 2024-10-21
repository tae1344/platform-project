import { Module } from '@nestjs/common';
import { SocialMediaSchedulerController } from './social-media-scheduler.controller';
import { SocialMediaSchedulerService } from './social-media-scheduler.service';

@Module({
  imports: [],
  controllers: [SocialMediaSchedulerController],
  providers: [SocialMediaSchedulerService],
})
export class SocialMediaSchedulerModule {}
