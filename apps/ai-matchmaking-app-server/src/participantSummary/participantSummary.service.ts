import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParticipantSummaryServiceBase } from "./base/participantSummary.service.base";

@Injectable()
export class ParticipantSummaryService extends ParticipantSummaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
