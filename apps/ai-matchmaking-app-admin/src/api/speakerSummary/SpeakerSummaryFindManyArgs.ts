import { SpeakerSummaryWhereInput } from "./SpeakerSummaryWhereInput";
import { SpeakerSummaryOrderByInput } from "./SpeakerSummaryOrderByInput";

export type SpeakerSummaryFindManyArgs = {
  where?: SpeakerSummaryWhereInput;
  orderBy?: Array<SpeakerSummaryOrderByInput>;
  skip?: number;
  take?: number;
};
