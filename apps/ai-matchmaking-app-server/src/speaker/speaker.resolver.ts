import * as graphql from "@nestjs/graphql";
import { SpeakerResolverBase } from "./base/speaker.resolver.base";
import { Speaker } from "./base/Speaker";
import { SpeakerService } from "./speaker.service";

@graphql.Resolver(() => Speaker)
export class SpeakerResolver extends SpeakerResolverBase {
  constructor(protected readonly service: SpeakerService) {
    super(service);
  }
}
