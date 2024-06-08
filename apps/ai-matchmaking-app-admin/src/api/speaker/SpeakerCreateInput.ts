import { ConferenceWhereUniqueInput } from "../conference/ConferenceWhereUniqueInput";
import { SpeakerSummaryCreateNestedManyWithoutSpeakersInput } from "./SpeakerSummaryCreateNestedManyWithoutSpeakersInput";

export type SpeakerCreateInput = {
  bio?: string | null;
  conference?: ConferenceWhereUniqueInput | null;
  name?: string | null;
  speakerSummaries?: SpeakerSummaryCreateNestedManyWithoutSpeakersInput;
};
