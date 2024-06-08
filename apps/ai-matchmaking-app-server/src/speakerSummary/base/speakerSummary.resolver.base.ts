/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SpeakerSummary } from "./SpeakerSummary";
import { SpeakerSummaryCountArgs } from "./SpeakerSummaryCountArgs";
import { SpeakerSummaryFindManyArgs } from "./SpeakerSummaryFindManyArgs";
import { SpeakerSummaryFindUniqueArgs } from "./SpeakerSummaryFindUniqueArgs";
import { CreateSpeakerSummaryArgs } from "./CreateSpeakerSummaryArgs";
import { UpdateSpeakerSummaryArgs } from "./UpdateSpeakerSummaryArgs";
import { DeleteSpeakerSummaryArgs } from "./DeleteSpeakerSummaryArgs";
import { Speaker } from "../../speaker/base/Speaker";
import { SpeakerSummaryService } from "../speakerSummary.service";
@graphql.Resolver(() => SpeakerSummary)
export class SpeakerSummaryResolverBase {
  constructor(protected readonly service: SpeakerSummaryService) {}

  async _speakerSummariesMeta(
    @graphql.Args() args: SpeakerSummaryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SpeakerSummary])
  async speakerSummaries(
    @graphql.Args() args: SpeakerSummaryFindManyArgs
  ): Promise<SpeakerSummary[]> {
    return this.service.speakerSummaries(args);
  }

  @graphql.Query(() => SpeakerSummary, { nullable: true })
  async speakerSummary(
    @graphql.Args() args: SpeakerSummaryFindUniqueArgs
  ): Promise<SpeakerSummary | null> {
    const result = await this.service.speakerSummary(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SpeakerSummary)
  async createSpeakerSummary(
    @graphql.Args() args: CreateSpeakerSummaryArgs
  ): Promise<SpeakerSummary> {
    return await this.service.createSpeakerSummary({
      ...args,
      data: {
        ...args.data,

        speaker: args.data.speaker
          ? {
              connect: args.data.speaker,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => SpeakerSummary)
  async updateSpeakerSummary(
    @graphql.Args() args: UpdateSpeakerSummaryArgs
  ): Promise<SpeakerSummary | null> {
    try {
      return await this.service.updateSpeakerSummary({
        ...args,
        data: {
          ...args.data,

          speaker: args.data.speaker
            ? {
                connect: args.data.speaker,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SpeakerSummary)
  async deleteSpeakerSummary(
    @graphql.Args() args: DeleteSpeakerSummaryArgs
  ): Promise<SpeakerSummary | null> {
    try {
      return await this.service.deleteSpeakerSummary(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Speaker, {
    nullable: true,
    name: "speaker",
  })
  async getSpeaker(
    @graphql.Parent() parent: SpeakerSummary
  ): Promise<Speaker | null> {
    const result = await this.service.getSpeaker(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}