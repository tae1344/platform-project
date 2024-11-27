import { Module } from '@nestjs/common';
import { SocialMediaSchedulerController } from './social-media-scheduler.controller';
import { SocialMediaSchedulerService } from './social-media-scheduler.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from '../schemas/post.schema';
import { ScheduleModule } from '@nestjs/schedule';
import * as mongoose from 'mongoose';
import { ConfigModule } from '@nestjs/config';
import * as process from 'node:process';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNECT_URL),
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    ScheduleModule.forRoot(),
  ],
  exports: [],
  controllers: [SocialMediaSchedulerController],
  providers: [SocialMediaSchedulerService],
})
export class SocialMediaSchedulerModule {
  constructor() {
    // 연결 성공 시 로그 남기기
    mongoose.connection.on('connected', () => {
      console.log('Successfully connected to MongoDB');
    });

    // 연결 실패 시 로그 남기기
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    // 연결 종료 시 로그 남기기
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB connection disconnected');
    });
  }
}
