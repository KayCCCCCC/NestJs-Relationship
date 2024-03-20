import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>
  ) { }

  async create(createCountryDto: CreateCountryDto) {
    const country = await this.countryRepository.create(createCountryDto)
    return await this.countryRepository.save(country)
  }

  async findAll() {
    return await this.countryRepository.find({
      relations: {
        cities: true,
        leader: true,
        timezones: true
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
