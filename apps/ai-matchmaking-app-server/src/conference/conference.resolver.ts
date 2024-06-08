import * as graphql from "@nestjs/graphql";
import { ConferenceResolverBase } from "./base/conference.resolver.base";
import { Conference } from "./base/Conference";
import { ConferenceService } from "./conference.service";

@graphql.Resolver(() => Conference)
export class ConferenceResolver extends ConferenceResolverBase {
  constructor(protected readonly service: ConferenceService) {
    super(service);
  }
}
