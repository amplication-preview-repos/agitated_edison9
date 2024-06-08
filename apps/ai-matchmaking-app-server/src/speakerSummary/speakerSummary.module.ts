import { Module } from "@nestjs/common";
import { SpeakerSummaryModuleBase } from "./base/speakerSummary.module.base";
import { SpeakerSummaryService } from "./speakerSummary.service";
import { SpeakerSummaryController } from "./speakerSummary.controller";
import { SpeakerSummaryResolver } from "./speakerSummary.resolver";

@Module({
  imports: [SpeakerSummaryModuleBase],
  controllers: [SpeakerSummaryController],
  providers: [SpeakerSummaryService, SpeakerSummaryResolver],
  exports: [SpeakerSummaryService],
})
export class SpeakerSummaryModule {}
