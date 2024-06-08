import { Module } from "@nestjs/common";
import { ConferenceModuleBase } from "./base/conference.module.base";
import { ConferenceService } from "./conference.service";
import { ConferenceController } from "./conference.controller";
import { ConferenceResolver } from "./conference.resolver";

@Module({
  imports: [ConferenceModuleBase],
  controllers: [ConferenceController],
  providers: [ConferenceService, ConferenceResolver],
  exports: [ConferenceService],
})
export class ConferenceModule {}
