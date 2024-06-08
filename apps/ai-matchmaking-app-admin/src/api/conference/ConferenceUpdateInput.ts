import { ActivityUpdateManyWithoutConferencesInput } from "./ActivityUpdateManyWithoutConferencesInput";
import { SpeakerUpdateManyWithoutConferencesInput } from "./SpeakerUpdateManyWithoutConferencesInput";

export type ConferenceUpdateInput = {
  activities?: ActivityUpdateManyWithoutConferencesInput;
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  speakers?: SpeakerUpdateManyWithoutConferencesInput;
};
