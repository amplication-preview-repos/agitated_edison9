import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConferenceServiceBase } from "./base/conference.service.base";

@Injectable()
export class ConferenceService extends ConferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
