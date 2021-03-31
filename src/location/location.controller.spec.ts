import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';

describe('LocationController', () => {
  let appController: LocationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
    }).compile();

    appController = app.get<LocationController>(LocationController);
  });

  describe('root', () => {
    it('should return list of locations', () => {
      expect(appController.listLocations()).toMatchObject({
        locations: ['Location 1', 'Location 2', 'Location 3'],
      });
    });
  });
});
