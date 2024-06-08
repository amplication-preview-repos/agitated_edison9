import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ParticipantTitle } from "../participant/ParticipantTitle";

export const ParticipantSummaryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput
          source="participant.id"
          reference="Participant"
          label="Participant"
        >
          <SelectInput optionText={ParticipantTitle} />
        </ReferenceInput>
        <TextInput label="summary" multiline source="summary" />
      </SimpleForm>
    </Create>
  );
};
