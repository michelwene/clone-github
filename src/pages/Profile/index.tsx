import React from "react";

import { Container, Main, LeftSide, RightSide } from "./styles";
import ProfileData from "../../components/ProfileData";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"MichelWene"}
            name={"Michel Wene"}
            avatarUrl={"https://avatars.githubusercontent.com/u/75140033?v=4"}
            followers={887}
            following={7}
            company={"Autônomo"}
            location={"São Paulo - Quatá"}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
