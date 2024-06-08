import { InputJsonValue } from "../../types";
import { ParticipantWhereUniqueInput } from "../participant/ParticipantWhereUniqueInput";

export type ParticipantSummaryUpdateInput = {
  embeddings?: InputJsonValue;
  participant?: ParticipantWhereUniqueInput | null;
  summary?: string | null;
};
