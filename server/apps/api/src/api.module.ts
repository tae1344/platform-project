import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import {EntityService} from "@app/entity";
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [ApiController, MoviesController],
  providers: [ApiService, EntityService, MoviesService],
})
export class ApiModule {}
