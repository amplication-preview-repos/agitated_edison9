import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ParticipantSummaryList } from "./participantSummary/ParticipantSummaryList";
import { ParticipantSummaryCreate } from "./participantSummary/ParticipantSummaryCreate";
import { ParticipantSummaryEdit } from "./participantSummary/ParticipantSummaryEdit";
import { ParticipantSummaryShow } from "./participantSummary/ParticipantSummaryShow";
import { ConferenceList } from "./conference/ConferenceList";
import { ConferenceCreate } from "./conference/ConferenceCreate";
import { ConferenceEdit } from "./conference/ConferenceEdit";
import { ConferenceShow } from "./conference/ConferenceShow";
import { ActivityList } from "./activity/ActivityList";
import { ActivityCreate } from "./activity/ActivityCreate";
import { ActivityEdit } from "./activity/ActivityEdit";
import { ActivityShow } from "./activity/ActivityShow";
import { SpeakerList } from "./speaker/SpeakerList";
import { SpeakerCreate } from "./speaker/SpeakerCreate";
import { SpeakerEdit } from "./speaker/SpeakerEdit";
import { SpeakerShow } from "./speaker/SpeakerShow";
import { ParticipantList } from "./participant/ParticipantList";
import { ParticipantCreate } from "./participant/ParticipantCreate";
import { ParticipantEdit } from "./participant/ParticipantEdit";
import { ParticipantShow } from "./participant/ParticipantShow";
import { ActivitySummaryList } from "./activitySummary/ActivitySummaryList";
import { ActivitySummaryCreate } from "./activitySummary/ActivitySummaryCreate";
import { ActivitySummaryEdit } from "./activitySummary/ActivitySummaryEdit";
import { ActivitySummaryShow } from "./activitySummary/ActivitySummaryShow";
import { SpeakerSummaryList } from "./speakerSummary/SpeakerSummaryList";
import { SpeakerSummaryCreate } from "./speakerSummary/SpeakerSummaryCreate";
import { SpeakerSummaryEdit } from "./speakerSummary/SpeakerSummaryEdit";
import { SpeakerSummaryShow } from "./speakerSummary/SpeakerSummaryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AI Matchmaking App"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ParticipantSummary"
          list={ParticipantSummaryList}
          edit={ParticipantSummaryEdit}
          create={ParticipantSummaryCreate}
          show={ParticipantSummaryShow}
        />
        <Resource
          name="Conference"
          list={ConferenceList}
          edit={ConferenceEdit}
          create={ConferenceCreate}
          show={ConferenceShow}
        />
        <Resource
          name="Activity"
          list={ActivityList}
          edit={ActivityEdit}
          create={ActivityCreate}
          show={ActivityShow}
        />
        <Resource
          name="Speaker"
          list={SpeakerList}
          edit={SpeakerEdit}
          create={SpeakerCreate}
          show={SpeakerShow}
        />
        <Resource
          name="Participant"
          list={ParticipantList}
          edit={ParticipantEdit}
          create={ParticipantCreate}
          show={ParticipantShow}
        />
        <Resource
          name="ActivitySummary"
          list={ActivitySummaryList}
          edit={ActivitySummaryEdit}
          create={ActivitySummaryCreate}
          show={ActivitySummaryShow}
        />
        <Resource
          name="SpeakerSummary"
          list={SpeakerSummaryList}
          edit={SpeakerSummaryEdit}
          create={SpeakerSummaryCreate}
          show={SpeakerSummaryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
