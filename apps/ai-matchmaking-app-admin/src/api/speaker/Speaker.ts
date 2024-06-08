import { Conference } from "../conference/Conference";
import { SpeakerSummary } from "../speakerSummary/SpeakerSummary";

export type Speaker = {
  bio: string | null;
  conference?: Conference | null;
  createdAt: Date;
  id: string;
  name: string | null;
  speakerSummaries?: Array<SpeakerSummary>;
  updatedAt: Date;
};
