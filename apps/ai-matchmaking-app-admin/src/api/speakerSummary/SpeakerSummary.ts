import { JsonValue } from "type-fest";
import { Speaker } from "../speaker/Speaker";

export type SpeakerSummary = {
  createdAt: Date;
  embeddings: JsonValue;
  id: string;
  speaker?: Speaker | null;
  summary: string | null;
  updatedAt: Date;
};
