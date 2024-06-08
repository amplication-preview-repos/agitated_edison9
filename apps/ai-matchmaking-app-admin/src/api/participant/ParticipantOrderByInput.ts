import { SortOrder } from "../../util/SortOrder";

export type ParticipantOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  interests?: SortOrder;
  questions?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
