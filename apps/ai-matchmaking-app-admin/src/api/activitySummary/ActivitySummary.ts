import { Activity } from "../activity/Activity";
import { JsonValue } from "type-fest";

export type ActivitySummary = {
  activity?: Activity | null;
  createdAt: Date;
  embeddings: JsonValue;
  id: string;
  summary: string | null;
  updatedAt: Date;
};
