import { Controller, Get } from '@nestjs/common';
import { SocialMediaSchedulerService } from './social-media-scheduler.service';

@Controller()
export class SocialMediaSchedulerController {
  constructor(private readonly socialMediaSchedulerService: SocialMediaSchedulerService) {}

  @Get()
  getHello(): string {
    return this.socialMediaSchedulerService.getHello();
  }
}
