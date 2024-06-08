import { InputJsonValue } from "../../types";
import { SpeakerWhereUniqueInput } from "../speaker/SpeakerWhereUniqueInput";

export type SpeakerSummaryUpdateInput = {
  embeddings?: InputJsonValue;
  speaker?: SpeakerWhereUniqueInput | null;
  summary?: string | null;
};
