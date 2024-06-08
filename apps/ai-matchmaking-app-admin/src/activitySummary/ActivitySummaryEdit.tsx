import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ActivityTitle } from "../activity/ActivityTitle";

export const ActivitySummaryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
