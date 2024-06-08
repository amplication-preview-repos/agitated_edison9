import { Activity } from "../activity/Activity";
import { Speaker } from "../speaker/Speaker";

export type Conference = {
  activities?: Array<Activity>;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  name: string | null;
  speakers?: Array<Speaker>;
  updatedAt: Date;
};
