import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ActivitySummaryTitle } from "../activitySummary/ActivitySummaryTitle";
import { ConferenceTitle } from "../conference/ConferenceTitle";

export const ActivityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="activitySummaries"
          reference="ActivitySummary"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ActivitySummaryTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="conference.id"
          reference="Conference"
          label="Conference"
        >
          <SelectInput optionText={ConferenceTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
