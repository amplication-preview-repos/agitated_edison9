import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParticipantSummaryService } from "./participantSummary.service";
import { ParticipantSummaryControllerBase } from "./base/participantSummary.controller.base";

@swagger.ApiTags("participantSummaries")
@common.Controller("participantSummaries")
export class ParticipantSummaryController extends ParticipantSummaryControllerBase {
  constructor(protected readonly service: ParticipantSummaryService) {
    super(service);
  }
}
