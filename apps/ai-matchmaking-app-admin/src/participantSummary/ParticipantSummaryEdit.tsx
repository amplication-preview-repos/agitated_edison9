import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ParticipantTitle } from "../participant/ParticipantTitle";

export const ParticipantSummaryEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
