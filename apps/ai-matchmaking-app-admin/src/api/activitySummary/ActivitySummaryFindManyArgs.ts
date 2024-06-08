import { ActivitySummaryWhereInput } from "./ActivitySummaryWhereInput";
import { ActivitySummaryOrderByInput } from "./ActivitySummaryOrderByInput";

export type ActivitySummaryFindManyArgs = {
  where?: ActivitySummaryWhereInput;
  orderBy?: Array<ActivitySummaryOrderByInput>;
  skip?: number;
  take?: number;
};
