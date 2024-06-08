import { SortOrder } from "../../util/SortOrder";

export type ParticipantSummaryOrderByInput = {
  createdAt?: SortOrder;
  embeddings?: SortOrder;
  id?: SortOrder;
  participantId?: SortOrder;
  summary?: SortOrder;
  updatedAt?: SortOrder;
};
