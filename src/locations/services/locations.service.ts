import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../../utils/error.manager';
import { LocationDTO, LocationUpdateDTO } from '../dto/locations.dto';
import { LocationsEntity } from '../entities/locations.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(LocationsEntity)
    private readonly locationRepository: Repository<LocationsEntity>,
  ) {}

  public async createLocation(body: LocationDTO): Promise<LocationsEntity> {
    const location = await this.locationRepository.save(body);
    if (!location) {
      throw new ConflictException(`Could not create location`);
    }
    return location;
  }

  public getLocations(): Promise<LocationsEntity[]> {
    return this.locationRepository.find();
  }

  public async getLocation(locationId: string): Promise<LocationsEntity> {
    try {
      const location = await this.locationRepository.findOne({
        where: { id: locationId },
      });
      if (!location) {
        throw new NotFoundException(`Location ${locationId} not found`);
      }
      return location;
    } catch (error) {
      throw ErrorManager.createSignatureError({
        message: error.message,
        status: error.status,
      });
    }
  }

  public async updateLocation(
    locationId: string,
    body: LocationUpdateDTO,
  ): Promise<UpdateResult> {
    try {
      return await this.locationRepository.update(locationId, body);
    } catch (error) {
      throw ErrorManager.createSignatureError({
        message: error.message,
        status: error.status,
      });
    }
  }

  public async deleteLocation(locationId: string): Promise<DeleteResult> {
    try {
      return await this.locationRepository.delete({ id: locationId });
    } catch (error) {
      throw ErrorManager.createSignatureError({
        message: error.message,
        status: error.status,
      });
    }
  }
}
