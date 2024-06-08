import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ActivitySummaryService } from "./activitySummary.service";
import { ActivitySummaryControllerBase } from "./base/activitySummary.controller.base";

@swagger.ApiTags("activitySummaries")
@common.Controller("activitySummaries")
export class ActivitySummaryController extends ActivitySummaryControllerBase {
  constructor(protected readonly service: ActivitySummaryService) {
    super(service);
  }
}
