import { SpeakerSummary as TSpeakerSummary } from "../api/speakerSummary/SpeakerSummary";

export const SPEAKERSUMMARY_TITLE_FIELD = "id";

export const SpeakerSummaryTitle = (record: TSpeakerSummary): string => {
  return record.id?.toString() || String(record.id);
};
