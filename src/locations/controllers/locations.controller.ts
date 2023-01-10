import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LocationDTO, LocationUpdateDTO } from '../dto/locations.dto';
import { LocationsService } from '../services/locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationService: LocationsService) {}

  @Post()
  createLocation(@Body() locationDto: LocationDTO) {
    return this.locationService.createLocation(locationDto);
  }

  @Get()
  getLocations() {
    return this.locationService.getLocations();
  }

  @Get(':locationId')
  getLocation(@Param('locationId') locationId: string) {
    return this.locationService.getLocation(locationId);
  }

  @Put(':locationId')
  updateLocation(
    @Param('locationId') locationId: string,
    @Body() locationUpdateDto: LocationUpdateDTO,
  ) {
    return this.locationService.updateLocation(locationId, locationUpdateDto);
  }

  @Delete(':locationId')
  deleteLocation(@Param('locationId') locationId: string) {
    return this.locationService.deleteLocation(locationId);
  }
}
