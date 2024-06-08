import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpeakerServiceBase } from "./base/speaker.service.base";

@Injectable()
export class SpeakerService extends SpeakerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
