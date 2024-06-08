import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { SpeakerTitle } from "../speaker/SpeakerTitle";

export const SpeakerSummaryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="speaker.id" reference="Speaker" label="Speaker">
          <SelectInput optionText={SpeakerTitle} />
        </ReferenceInput>
        <TextInput label="summary" multiline source="summary" />
      </SimpleForm>
    </Edit>
  );
};
