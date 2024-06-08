import { ActivitySummaryCreateNestedManyWithoutActivitiesInput } from "./ActivitySummaryCreateNestedManyWithoutActivitiesInput";
import { ConferenceWhereUniqueInput } from "../conference/ConferenceWhereUniqueInput";

export type ActivityCreateInput = {
  activitySummaries?: ActivitySummaryCreateNestedManyWithoutActivitiesInput;
  conference?: ConferenceWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
