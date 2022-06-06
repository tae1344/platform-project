import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching movie width a title made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  removeMovie(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  // Patch or Put : patch는 일부만 업데이트 하고자 할때, put은 전체적으로 업데이트 할 때
  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
