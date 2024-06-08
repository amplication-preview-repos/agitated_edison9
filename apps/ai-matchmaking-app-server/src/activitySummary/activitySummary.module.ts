import { Module } from "@nestjs/common";
import { ActivitySummaryModuleBase } from "./base/activitySummary.module.base";
import { ActivitySummaryService } from "./activitySummary.service";
import { ActivitySummaryController } from "./activitySummary.controller";
import { ActivitySummaryResolver } from "./activitySummary.resolver";

@Module({
  imports: [ActivitySummaryModuleBase],
  controllers: [ActivitySummaryController],
  providers: [ActivitySummaryService, ActivitySummaryResolver],
  exports: [ActivitySummaryService],
})
export class ActivitySummaryModule {}
