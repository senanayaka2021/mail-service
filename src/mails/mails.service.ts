import { Injectable } from '@nestjs/common';
import {IMail} from "./interfaces/mails.interface";

@Injectable()
export class MailsService {
    mails: Array<IMail>;

    constructor() {
        this.mails = [];
    }

    sendMail(mail: IMail): IMail {
        console.log('mail', mail)
        this.mails.push(mail);
        return this.mails[this.mails.length - 1];
    }

    getList(): Array<IMail> {
        return this.mails;
    }
}
