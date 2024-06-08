import * as graphql from "@nestjs/graphql";
import { SpeakerSummaryResolverBase } from "./base/speakerSummary.resolver.base";
import { SpeakerSummary } from "./base/SpeakerSummary";
import { SpeakerSummaryService } from "./speakerSummary.service";

@graphql.Resolver(() => SpeakerSummary)
export class SpeakerSummaryResolver extends SpeakerSummaryResolverBase {
  constructor(protected readonly service: SpeakerSummaryService) {
    super(service);
  }
}
