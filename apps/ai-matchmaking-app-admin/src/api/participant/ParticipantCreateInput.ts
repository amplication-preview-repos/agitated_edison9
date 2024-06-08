import { InputJsonValue } from "../../types";
import { ParticipantSummaryCreateNestedManyWithoutParticipantsInput } from "./ParticipantSummaryCreateNestedManyWithoutParticipantsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantCreateInput = {
  interests?: InputJsonValue;
  participantSummaries?: ParticipantSummaryCreateNestedManyWithoutParticipantsInput;
  questions?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
