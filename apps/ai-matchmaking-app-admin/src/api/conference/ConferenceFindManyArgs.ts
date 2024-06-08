import { ConferenceWhereInput } from "./ConferenceWhereInput";
import { ConferenceOrderByInput } from "./ConferenceOrderByInput";

export type ConferenceFindManyArgs = {
  where?: ConferenceWhereInput;
  orderBy?: Array<ConferenceOrderByInput>;
  skip?: number;
  take?: number;
};
