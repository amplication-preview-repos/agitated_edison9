import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PARTICIPANT_TITLE_FIELD } from "./ParticipantTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ParticipantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="interests" source="interests" />
        <TextField label="questions" source="questions" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ParticipantSummary"
          target="participantId"
          label="ParticipantSummaries"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
