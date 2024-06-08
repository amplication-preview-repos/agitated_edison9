import { Conference as TConference } from "../api/conference/Conference";

export const CONFERENCE_TITLE_FIELD = "name";

export const ConferenceTitle = (record: TConference): string => {
  return record.name?.toString() || String(record.id);
};
