import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ParticipantSummaryListRelationFilter } from "../participantSummary/ParticipantSummaryListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantWhereInput = {
  id?: StringFilter;
  interests?: JsonFilter;
  participantSummaries?: ParticipantSummaryListRelationFilter;
  questions?: JsonFilter;
  user?: UserWhereUniqueInput;
};
