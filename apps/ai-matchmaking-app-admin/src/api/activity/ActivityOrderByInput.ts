import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  conferenceId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
