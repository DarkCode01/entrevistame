import { GetServerSideProps } from "next";
import Page from "../../components/Page";
import Nav from "../../components/Nav";
import Container from "../../components/Container";
import Editor from "../../components/Editor";
import Camera from "../../components/Camera";
import Menu from "../../components/Menu";
import { Button, GroupButton } from "../../components/Button";

interface IHome {
  code: string;
}

const Home = ({ code }: IHome): JSX.Element => {
  return (
    <Page>
      <Container>
        <Nav
          room={code}
          buttons={
            <GroupButton>
              <Button>Salir</Button>
            </GroupButton>
          }
        />

        <Container style={{ position: "relative" }}>
          <Container>
            <Camera />
          </Container>

          <Container
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <Editor room={code} />
          </Container>

          <Container>
            <Menu />
          </Container>
        </Container>
      </Container>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { code } = context.query;
  return {
    props: { code },
  };
};

export default Home;
