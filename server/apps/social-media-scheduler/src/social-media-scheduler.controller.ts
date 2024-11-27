import { Body, Controller, Get, Post } from '@nestjs/common';
import { SocialMediaSchedulerService } from './social-media-scheduler.service';
import { LocalDateTime, LocalTime } from 'js-joda';

@Controller('posts')
export class SocialMediaSchedulerController {
  constructor(
    private readonly socialMediaSchedulerService: SocialMediaSchedulerService,
  ) {}

  @Get()
  getPost(): string {
    return 'Hello World !!';
  }

  @Post()
  async schedulePost(
    @Body('content') content: string,
    @Body('platform') platform: string,
    @Body('scheduleTime') scheduleTime: LocalDateTime,
  ): Promise<any> {
    const scheduledPost = await this.socialMediaSchedulerService.schedulePost(
      content,
      platform,
      scheduleTime,
    );

    console.log(scheduledPost);

    return { message: 'Post scheduled successfully', scheduledPost };
  }
}
