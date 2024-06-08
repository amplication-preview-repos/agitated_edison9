import { ActivityCreateNestedManyWithoutConferencesInput } from "./ActivityCreateNestedManyWithoutConferencesInput";
import { SpeakerCreateNestedManyWithoutConferencesInput } from "./SpeakerCreateNestedManyWithoutConferencesInput";

export type ConferenceCreateInput = {
  activities?: ActivityCreateNestedManyWithoutConferencesInput;
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  speakers?: SpeakerCreateNestedManyWithoutConferencesInput;
};
