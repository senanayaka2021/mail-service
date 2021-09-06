import { Module } from '@nestjs/common';
import { MailsController } from './mails/mails.controller';
import { MailsService } from './mails/mails.service';

@Module({
  imports: [],
  controllers: [MailsController],
  providers: [MailsService],
})
export class AppModule {}
