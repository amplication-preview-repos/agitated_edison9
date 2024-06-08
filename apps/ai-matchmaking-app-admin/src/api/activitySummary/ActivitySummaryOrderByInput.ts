import { SortOrder } from "../../util/SortOrder";

export type ActivitySummaryOrderByInput = {
  activityId?: SortOrder;
  createdAt?: SortOrder;
  embeddings?: SortOrder;
  id?: SortOrder;
  summary?: SortOrder;
  updatedAt?: SortOrder;
};
