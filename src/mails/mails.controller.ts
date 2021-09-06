import { Controller } from '@nestjs/common';
import {MailsService} from "./mails.service";
import {MessagePattern, Payload} from "@nestjs/microservices";
import {IKafkaMessage} from "../interfaces/kafka-message.interface";
import {IMail} from "./interfaces/mails.interface";

@Controller()
export class MailsController {
    constructor(private mailsService: MailsService) {}

    @MessagePattern('get.mail.list')
    getPosts() {
        return this.mailsService.getList();
    }

    @MessagePattern('send.new.email')
    addPost(@Payload() message: IKafkaMessage<IMail>) {
        return this.mailsService.sendMail(message.value);
    }
}
