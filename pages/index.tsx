import Page from "../components/Page";
import Nav from "../components/Nav";
import Container from "../components/Container";
// import Footer from "../components/Footer";
import Editor from "../components/Editor";
import Camera from "../components/Camera";
import Menu from "../components/Menu";
// import styles from "../styles/simple.module.css";

export const Home = (): JSX.Element => {
  return (
    <Page>
      <Container>
        <Nav />

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
            <Editor />
          </Container>

          <Container>
            <Menu />
          </Container>
        </Container>

        {/* <Footer /> */}
      </Container>
    </Page>
  );
};

export default Home;
