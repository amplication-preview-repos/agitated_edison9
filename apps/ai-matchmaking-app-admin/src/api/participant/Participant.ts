import { JsonValue } from "type-fest";
import { ParticipantSummary } from "../participantSummary/ParticipantSummary";
import { User } from "../user/User";

export type Participant = {
  createdAt: Date;
  id: string;
  interests: JsonValue;
  participantSummaries?: Array<ParticipantSummary>;
  questions: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
