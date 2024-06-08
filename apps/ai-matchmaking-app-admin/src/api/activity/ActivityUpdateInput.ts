import { ActivitySummaryUpdateManyWithoutActivitiesInput } from "./ActivitySummaryUpdateManyWithoutActivitiesInput";
import { ConferenceWhereUniqueInput } from "../conference/ConferenceWhereUniqueInput";

export type ActivityUpdateInput = {
  activitySummaries?: ActivitySummaryUpdateManyWithoutActivitiesInput;
  conference?: ConferenceWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
