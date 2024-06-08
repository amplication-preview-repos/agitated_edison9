import { Module } from "@nestjs/common";
import { ParticipantSummaryModuleBase } from "./base/participantSummary.module.base";
import { ParticipantSummaryService } from "./participantSummary.service";
import { ParticipantSummaryController } from "./participantSummary.controller";
import { ParticipantSummaryResolver } from "./participantSummary.resolver";

@Module({
  imports: [ParticipantSummaryModuleBase],
  controllers: [ParticipantSummaryController],
  providers: [ParticipantSummaryService, ParticipantSummaryResolver],
  exports: [ParticipantSummaryService],
})
export class ParticipantSummaryModule {}
