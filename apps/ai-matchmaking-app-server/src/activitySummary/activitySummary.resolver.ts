import * as graphql from "@nestjs/graphql";
import { ActivitySummaryResolverBase } from "./base/activitySummary.resolver.base";
import { ActivitySummary } from "./base/ActivitySummary";
import { ActivitySummaryService } from "./activitySummary.service";

@graphql.Resolver(() => ActivitySummary)
export class ActivitySummaryResolver extends ActivitySummaryResolverBase {
  constructor(protected readonly service: ActivitySummaryService) {
    super(service);
  }
}
