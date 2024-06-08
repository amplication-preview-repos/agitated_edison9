import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ActivityTitle } from "../activity/ActivityTitle";

export const ActivitySummaryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="activity.id"
          reference="Activity"
          label="Activity"
        >
          <SelectInput optionText={ActivityTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="summary" multiline source="summary" />
      </SimpleForm>
    </Create>
  );
};
