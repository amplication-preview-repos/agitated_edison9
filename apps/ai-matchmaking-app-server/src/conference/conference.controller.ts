import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConferenceService } from "./conference.service";
import { ConferenceControllerBase } from "./base/conference.controller.base";

@swagger.ApiTags("conferences")
@common.Controller("conferences")
export class ConferenceController extends ConferenceControllerBase {
  constructor(protected readonly service: ConferenceService) {
    super(service);
  }
}
