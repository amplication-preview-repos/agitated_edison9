import { ActivityWhereUniqueInput } from "../activity/ActivityWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ActivitySummaryCreateInput = {
  activity?: ActivityWhereUniqueInput | null;
  embeddings?: InputJsonValue;
  summary?: string | null;
};
