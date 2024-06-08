import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpeakerSummaryServiceBase } from "./base/speakerSummary.service.base";

@Injectable()
export class SpeakerSummaryService extends SpeakerSummaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
