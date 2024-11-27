import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from '../schemas/post.schema';
import { LocalDateTime } from 'js-joda';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SocialMediaSchedulerService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  // 새로운 게시물 예약
  async schedulePost(
    content: string,
    platform: string,
    scheduleTime: LocalDateTime,
  ) {
    const post = new this.postModel({
      id: '0',
      content,
      platform,
      scheduleTime,
    });
    await post.save();
    return post;
  }
}
