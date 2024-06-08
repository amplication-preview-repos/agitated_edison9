import { ParticipantSummaryWhereInput } from "./ParticipantSummaryWhereInput";
import { ParticipantSummaryOrderByInput } from "./ParticipantSummaryOrderByInput";

export type ParticipantSummaryFindManyArgs = {
  where?: ParticipantSummaryWhereInput;
  orderBy?: Array<ParticipantSummaryOrderByInput>;
  skip?: number;
  take?: number;
};
