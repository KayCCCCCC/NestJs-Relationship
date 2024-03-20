import { Injectable } from '@nestjs/common';
import { CreateTimezoneDto } from './dto/create-timezone.dto';
import { UpdateTimezoneDto } from './dto/update-timezone.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Timezone } from './entities/timezone.entity';
import { Repository } from 'typeorm';
import { Country } from 'src/countries/entities/country.entity';

@Injectable()
export class TimezonesService {
  constructor(
    @InjectRepository(Timezone)
    private readonly timezoneRepository: Repository<Timezone>
  ) { }
  async create(createTimezoneDto: CreateTimezoneDto) {
    const timezone = this.timezoneRepository.create(createTimezoneDto)

    timezone.countries = createTimezoneDto.countryIds.map(id => ({ ... new Country(), id }))

    return await this.timezoneRepository.save(timezone);
  }

  async findAll() {
    return await this.timezoneRepository.find({
      relations: {
        countries: true
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} timezone`;
  }

  update(id: number, updateTimezoneDto: UpdateTimezoneDto) {
    return `This action updates a #${id} timezone`;
  }

  remove(id: number) {
    return `This action removes a #${id} timezone`;
  }
}
