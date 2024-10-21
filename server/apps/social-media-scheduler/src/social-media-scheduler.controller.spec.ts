import { Test, TestingModule } from '@nestjs/testing';
import { SocialMediaSchedulerController } from './social-media-scheduler.controller';
import { SocialMediaSchedulerService } from './social-media-scheduler.service';

describe('SocialMediaSchedulerController', () => {
  let socialMediaSchedulerController: SocialMediaSchedulerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SocialMediaSchedulerController],
      providers: [SocialMediaSchedulerService],
    }).compile();

    socialMediaSchedulerController = app.get<SocialMediaSchedulerController>(SocialMediaSchedulerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(socialMediaSchedulerController.getHello()).toBe('Hello World!');
    });
  });
});
