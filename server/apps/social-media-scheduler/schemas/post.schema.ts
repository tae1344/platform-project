import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ required: true })
  id: string;

  @Prop()
  content: string;

  @Prop()
  platform: string;

  @Prop()
  status: string;

  @Prop()
  scheduleTime: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
