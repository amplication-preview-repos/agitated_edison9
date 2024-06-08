import { JsonValue } from "type-fest";
import { Participant } from "../participant/Participant";

export type ParticipantSummary = {
  createdAt: Date;
  embeddings: JsonValue;
  id: string;
  participant?: Participant | null;
  summary: string | null;
  updatedAt: Date;
};
