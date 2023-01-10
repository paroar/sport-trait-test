import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocationDTO, LocationUpdateDTO } from '../dto/locations.dto';
import { LocationsService } from '../services/locations.service';

@Controller('locations')
@ApiTags('locations')
export class LocationsController {
  constructor(private readonly locationService: LocationsService) {}

  @ApiOperation({ summary: 'Create location' })
  @Post()
  createLocation(@Body() locationDto: LocationDTO) {
    return this.locationService.createLocation(locationDto);
  }

  @ApiOperation({ summary: 'Get locations' })
  @Get()
  getLocations() {
    return this.locationService.getLocations();
  }

  @ApiOperation({ summary: 'Get location by id' })
  @Get(':locationId')
  getLocation(@Param('locationId') locationId: string) {
    return this.locationService.getLocation(locationId);
  }

  @ApiOperation({ summary: 'Update location' })
  @Put(':locationId')
  updateLocation(
    @Param('locationId') locationId: string,
    @Body() locationUpdateDto: LocationUpdateDTO,
  ) {
    return this.locationService.updateLocation(locationId, locationUpdateDto);
  }

  @ApiOperation({ summary: 'Delete location' })
  @Delete(':locationId')
  deleteLocation(@Param('locationId') locationId: string) {
    return this.locationService.deleteLocation(locationId);
  }
}
