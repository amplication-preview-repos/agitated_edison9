import { ActivityListRelationFilter } from "../activity/ActivityListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SpeakerListRelationFilter } from "../speaker/SpeakerListRelationFilter";

export type ConferenceWhereInput = {
  activities?: ActivityListRelationFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  speakers?: SpeakerListRelationFilter;
};
