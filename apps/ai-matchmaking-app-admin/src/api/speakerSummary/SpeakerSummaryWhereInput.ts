import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { SpeakerWhereUniqueInput } from "../speaker/SpeakerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SpeakerSummaryWhereInput = {
  embeddings?: JsonFilter;
  id?: StringFilter;
  speaker?: SpeakerWhereUniqueInput;
  summary?: StringNullableFilter;
};
