import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ConferenceTitle } from "../conference/ConferenceTitle";
import { SpeakerSummaryTitle } from "../speakerSummary/SpeakerSummaryTitle";

export const SpeakerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <ReferenceInput
          source="conference.id"
          reference="Conference"
          label="Conference"
        >
          <SelectInput optionText={ConferenceTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="speakerSummaries"
          reference="SpeakerSummary"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SpeakerSummaryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
