import { Injectable } from '@nestjs/common';

@Injectable()
export class SocialMediaSchedulerService {
  getHello(): string {
    return 'Hello World!';
  }
}
