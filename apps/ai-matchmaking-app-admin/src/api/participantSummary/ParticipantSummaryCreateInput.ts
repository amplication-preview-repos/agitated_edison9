import { InputJsonValue } from "../../types";
import { ParticipantWhereUniqueInput } from "../participant/ParticipantWhereUniqueInput";

export type ParticipantSummaryCreateInput = {
  embeddings?: InputJsonValue;
  participant?: ParticipantWhereUniqueInput | null;
  summary?: string | null;
};
