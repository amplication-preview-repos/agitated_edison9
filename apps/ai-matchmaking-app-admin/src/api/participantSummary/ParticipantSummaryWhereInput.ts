import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParticipantWhereUniqueInput } from "../participant/ParticipantWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ParticipantSummaryWhereInput = {
  embeddings?: JsonFilter;
  id?: StringFilter;
  participant?: ParticipantWhereUniqueInput;
  summary?: StringNullableFilter;
};
