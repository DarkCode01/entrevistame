import Page from "../components/Page";
import Nav from "../components/Nav";
import Container from "../components/Container";

export const Home = (): JSX.Element => {
  return (
    <Page>
      <Container>
        <Nav />
      </Container>
    </Page>
  );
};

export default Home;
