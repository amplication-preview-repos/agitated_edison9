import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ConferenceWhereUniqueInput } from "../conference/ConferenceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { SpeakerSummaryListRelationFilter } from "../speakerSummary/SpeakerSummaryListRelationFilter";

export type SpeakerWhereInput = {
  bio?: StringNullableFilter;
  conference?: ConferenceWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  speakerSummaries?: SpeakerSummaryListRelationFilter;
};
