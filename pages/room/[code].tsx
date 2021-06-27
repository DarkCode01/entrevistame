import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { v4 as uuid } from "uuid";
import Page from "../../components/Page";
import Nav from "../../components/Nav";
import Container from "../../components/Container";
import Editor from "../../components/Editor";
// import Camera from "../../components/Camera";
import Menu from "../../components/Menu";
import { Button, GroupButton } from "../../components/Button";
// import { useChannel } from "../../lib/hooks/useChannel";
import { Socket } from "phoenix";

interface IHome {
  code: string;
}

const Home = ({ code }: IHome): JSX.Element => {
  const roomId = uuid();
  const userId = uuid();
  const [currentChannel, setCurrentChannel] = useState(null);

  useEffect(() => {
    const socket = new Socket("ws://localhost:4000/socket", {
      params: {
        room: roomId,
      },
    });
    const channel = socket.channel(`live_code:${code}`, {
      room: code,
    });

    setCurrentChannel(channel);

    channel.join().receive("ok", () => {
      // eslint-disable-next-line no-console
      console.log("connected");
    });

    socket.connect();

    return () => {
      channel.leave();
    };
  }, []);

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
          {/* <Container>
            <Camera />
          </Container> */}

          <Container
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <Editor userId={userId} room={code} channel={currentChannel} />
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
