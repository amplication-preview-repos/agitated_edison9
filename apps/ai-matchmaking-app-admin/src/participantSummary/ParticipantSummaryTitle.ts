import { ParticipantSummary as TParticipantSummary } from "../api/participantSummary/ParticipantSummary";

export const PARTICIPANTSUMMARY_TITLE_FIELD = "id";

export const ParticipantSummaryTitle = (
  record: TParticipantSummary
): string => {
  return record.id?.toString() || String(record.id);
};
