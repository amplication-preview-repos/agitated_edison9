import { InputJsonValue } from "../../types";
import { ParticipantSummaryUpdateManyWithoutParticipantsInput } from "./ParticipantSummaryUpdateManyWithoutParticipantsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantUpdateInput = {
  interests?: InputJsonValue;
  participantSummaries?: ParticipantSummaryUpdateManyWithoutParticipantsInput;
  questions?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
