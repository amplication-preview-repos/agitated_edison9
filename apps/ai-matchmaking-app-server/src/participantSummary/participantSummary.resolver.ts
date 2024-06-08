import * as graphql from "@nestjs/graphql";
import { ParticipantSummaryResolverBase } from "./base/participantSummary.resolver.base";
import { ParticipantSummary } from "./base/ParticipantSummary";
import { ParticipantSummaryService } from "./participantSummary.service";

@graphql.Resolver(() => ParticipantSummary)
export class ParticipantSummaryResolver extends ParticipantSummaryResolverBase {
  constructor(protected readonly service: ParticipantSummaryService) {
    super(service);
  }
}
