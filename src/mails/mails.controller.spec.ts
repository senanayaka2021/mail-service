import { Test, TestingModule } from '@nestjs/testing';
import { MailsController } from './mails.controller';

describe('Mails Controller', () => {
  let controller: MailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailsController],
    }).compile();

    controller = module.get<MailsController>(MailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
