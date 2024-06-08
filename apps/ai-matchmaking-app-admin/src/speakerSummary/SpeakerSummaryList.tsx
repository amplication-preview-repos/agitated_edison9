import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SPEAKER_TITLE_FIELD } from "../speaker/SpeakerTitle";

export const SpeakerSummaryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SpeakerSummaries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="embeddings" source="embeddings" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Speaker" source="speaker.id" reference="Speaker">
          <TextField source={SPEAKER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="summary" source="summary" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
