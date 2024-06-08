/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ParticipantService } from "../participant.service";
import { ParticipantCreateInput } from "./ParticipantCreateInput";
import { Participant } from "./Participant";
import { ParticipantFindManyArgs } from "./ParticipantFindManyArgs";
import { ParticipantWhereUniqueInput } from "./ParticipantWhereUniqueInput";
import { ParticipantUpdateInput } from "./ParticipantUpdateInput";
import { ParticipantSummaryFindManyArgs } from "../../participantSummary/base/ParticipantSummaryFindManyArgs";
import { ParticipantSummary } from "../../participantSummary/base/ParticipantSummary";
import { ParticipantSummaryWhereUniqueInput } from "../../participantSummary/base/ParticipantSummaryWhereUniqueInput";

export class ParticipantControllerBase {
  constructor(protected readonly service: ParticipantService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Participant })
  async createParticipant(
    @common.Body() data: ParticipantCreateInput
  ): Promise<Participant> {
    return await this.service.createParticipant({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        interests: true,
        questions: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Participant] })
  @ApiNestedQuery(ParticipantFindManyArgs)
  async participants(@common.Req() request: Request): Promise<Participant[]> {
    const args = plainToClass(ParticipantFindManyArgs, request.query);
    return this.service.participants({
      ...args,
      select: {
        createdAt: true,
        id: true,
        interests: true,
        questions: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Participant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async participant(
    @common.Param() params: ParticipantWhereUniqueInput
  ): Promise<Participant | null> {
    const result = await this.service.participant({
      where: params,
      select: {
        createdAt: true,
        id: true,
        interests: true,
        questions: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Participant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateParticipant(
    @common.Param() params: ParticipantWhereUniqueInput,
    @common.Body() data: ParticipantUpdateInput
  ): Promise<Participant | null> {
    try {
      return await this.service.updateParticipant({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          interests: true,
          questions: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Participant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteParticipant(
    @common.Param() params: ParticipantWhereUniqueInput
  ): Promise<Participant | null> {
    try {
      return await this.service.deleteParticipant({
        where: params,
        select: {
          createdAt: true,
          id: true,
          interests: true,
          questions: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/participantSummaries")
  @ApiNestedQuery(ParticipantSummaryFindManyArgs)
  async findParticipantSummaries(
    @common.Req() request: Request,
    @common.Param() params: ParticipantWhereUniqueInput
  ): Promise<ParticipantSummary[]> {
    const query = plainToClass(ParticipantSummaryFindManyArgs, request.query);
    const results = await this.service.findParticipantSummaries(params.id, {
      ...query,
      select: {
        createdAt: true,
        embeddings: true,
        id: true,

        participant: {
          select: {
            id: true,
          },
        },

        summary: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/participantSummaries")
  async connectParticipantSummaries(
    @common.Param() params: ParticipantWhereUniqueInput,
    @common.Body() body: ParticipantSummaryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      participantSummaries: {
        connect: body,
      },
    };
    await this.service.updateParticipant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/participantSummaries")
  async updateParticipantSummaries(
    @common.Param() params: ParticipantWhereUniqueInput,
    @common.Body() body: ParticipantSummaryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      participantSummaries: {
        set: body,
      },
    };
    await this.service.updateParticipant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/participantSummaries")
  async disconnectParticipantSummaries(
    @common.Param() params: ParticipantWhereUniqueInput,
    @common.Body() body: ParticipantSummaryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      participantSummaries: {
        disconnect: body,
      },
    };
    await this.service.updateParticipant({
      where: params,
      data,
      select: { id: true },
    });
  }
}
