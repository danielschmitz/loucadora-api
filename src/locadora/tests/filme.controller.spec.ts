import { Test, TestingModule } from '@nestjs/testing';
import { FilmeController } from '../controllers/filme';

describe('FilmeController', () => {
  let controller: FilmeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmeController],
    }).compile();

    controller = module.get<FilmeController>(FilmeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
