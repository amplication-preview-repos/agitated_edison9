import { ActivitySummary } from "../activitySummary/ActivitySummary";
import { Conference } from "../conference/Conference";

export type Activity = {
  activitySummaries?: Array<ActivitySummary>;
  conference?: Conference | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
