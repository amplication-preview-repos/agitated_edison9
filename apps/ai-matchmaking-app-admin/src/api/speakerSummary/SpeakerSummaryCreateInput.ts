import { InputJsonValue } from "../../types";
import { SpeakerWhereUniqueInput } from "../speaker/SpeakerWhereUniqueInput";

export type SpeakerSummaryCreateInput = {
  embeddings?: InputJsonValue;
  speaker?: SpeakerWhereUniqueInput | null;
  summary?: string | null;
};
