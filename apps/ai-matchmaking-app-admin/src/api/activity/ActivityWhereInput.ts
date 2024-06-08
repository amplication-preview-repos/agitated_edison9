import { ActivitySummaryListRelationFilter } from "../activitySummary/ActivitySummaryListRelationFilter";
import { ConferenceWhereUniqueInput } from "../conference/ConferenceWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ActivityWhereInput = {
  activitySummaries?: ActivitySummaryListRelationFilter;
  conference?: ConferenceWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
