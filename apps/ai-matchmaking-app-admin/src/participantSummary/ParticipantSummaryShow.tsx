import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PARTICIPANT_TITLE_FIELD } from "../participant/ParticipantTitle";

export const ParticipantSummaryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="embeddings" source="embeddings" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Participant"
          source="participant.id"
          reference="Participant"
        >
          <TextField source={PARTICIPANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="summary" source="summary" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
