import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { SpeakerTitle } from "../speaker/SpeakerTitle";

export const SpeakerSummaryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="speaker.id" reference="Speaker" label="Speaker">
          <SelectInput optionText={SpeakerTitle} />
        </ReferenceInput>
        <TextInput label="summary" multiline source="summary" />
      </SimpleForm>
    </Create>
  );
};
