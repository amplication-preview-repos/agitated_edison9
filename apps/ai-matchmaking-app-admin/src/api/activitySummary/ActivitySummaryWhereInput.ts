import { ActivityWhereUniqueInput } from "../activity/ActivityWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ActivitySummaryWhereInput = {
  activity?: ActivityWhereUniqueInput;
  embeddings?: JsonFilter;
  id?: StringFilter;
  summary?: StringNullableFilter;
};
