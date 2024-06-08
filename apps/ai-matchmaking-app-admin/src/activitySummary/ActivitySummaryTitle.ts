import { ActivitySummary as TActivitySummary } from "../api/activitySummary/ActivitySummary";

export const ACTIVITYSUMMARY_TITLE_FIELD = "id";

export const ActivitySummaryTitle = (record: TActivitySummary): string => {
  return record.id?.toString() || String(record.id);
};
