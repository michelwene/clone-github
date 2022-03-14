import React from "react";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

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
            location={"Quatá - São Paulo"}
            email={"michelwene@hotmail.com"}
            blog={undefined}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"michelwene"}
                  reponame={"Todo-app"}
                  description={"Contains my project todo-app"}
                  language={n % 3 === 0 ? "Javascript" : "Typescript"}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
