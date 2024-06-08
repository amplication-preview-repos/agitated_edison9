import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpeakerSummaryService } from "./speakerSummary.service";
import { SpeakerSummaryControllerBase } from "./base/speakerSummary.controller.base";

@swagger.ApiTags("speakerSummaries")
@common.Controller("speakerSummaries")
export class SpeakerSummaryController extends SpeakerSummaryControllerBase {
  constructor(protected readonly service: SpeakerSummaryService) {
    super(service);
  }
}
