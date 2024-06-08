import { Speaker as TSpeaker } from "../api/speaker/Speaker";

export const SPEAKER_TITLE_FIELD = "name";

export const SpeakerTitle = (record: TSpeaker): string => {
  return record.name?.toString() || String(record.id);
};
