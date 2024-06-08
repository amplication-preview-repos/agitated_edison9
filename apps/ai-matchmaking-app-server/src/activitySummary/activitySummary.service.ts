import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ActivitySummaryServiceBase } from "./base/activitySummary.service.base";

@Injectable()
export class ActivitySummaryService extends ActivitySummaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
