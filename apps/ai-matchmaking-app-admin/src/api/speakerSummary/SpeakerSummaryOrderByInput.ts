import { SortOrder } from "../../util/SortOrder";

export type SpeakerSummaryOrderByInput = {
  createdAt?: SortOrder;
  embeddings?: SortOrder;
  id?: SortOrder;
  speakerId?: SortOrder;
  summary?: SortOrder;
  updatedAt?: SortOrder;
};
