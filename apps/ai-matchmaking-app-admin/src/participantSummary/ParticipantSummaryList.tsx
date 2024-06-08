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
import { PARTICIPANT_TITLE_FIELD } from "../participant/ParticipantTitle";

export const ParticipantSummaryList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ParticipantSummaries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="embeddings" source="embeddings" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Participant"
          source="participant.id"
          reference="Participant"
        >
          <TextField source={PARTICIPANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="summary" source="summary" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
