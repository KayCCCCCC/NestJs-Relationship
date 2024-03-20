import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/city.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([City]), // Import City Entity vào module
  ],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule { }
