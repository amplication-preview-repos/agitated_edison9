import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SPEAKER_TITLE_FIELD } from "./SpeakerTitle";
import { CONFERENCE_TITLE_FIELD } from "../conference/ConferenceTitle";

export const SpeakerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bio" source="bio" />
        <ReferenceField
          label="Conference"
          source="conference.id"
          reference="Conference"
        >
          <TextField source={CONFERENCE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SpeakerSummary"
          target="speakerId"
          label="SpeakerSummaries"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="embeddings" source="embeddings" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Speaker"
              source="speaker.id"
              reference="Speaker"
            >
              <TextField source={SPEAKER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="summary" source="summary" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
