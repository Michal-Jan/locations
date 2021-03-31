import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { LocationModule } from '../src/location/location.module';

describe('LocationController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [LocationModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .then(({ text }) => {
        expect(text).toMatchCompiledHandlebarsTemplate('list.hbs', {
          locations: ['Location 1', 'Location 2', 'Location 3'],
        });
      });
  });
});
