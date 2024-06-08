import { ConferenceWhereUniqueInput } from "../conference/ConferenceWhereUniqueInput";
import { SpeakerSummaryUpdateManyWithoutSpeakersInput } from "./SpeakerSummaryUpdateManyWithoutSpeakersInput";

export type SpeakerUpdateInput = {
  bio?: string | null;
  conference?: ConferenceWhereUniqueInput | null;
  name?: string | null;
  speakerSummaries?: SpeakerSummaryUpdateManyWithoutSpeakersInput;
};
