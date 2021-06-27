import Page from "../components/Page";
import Container from "../components/Container";
import Card from "../components/Card";
import { Button } from "../components/Button";
import { Form, Input } from "../components/base";
import Collapse from "../components/Collapse";
import Code from "../components/Code";

export const Home = (): JSX.Element => {
  return (
    <Page>
      <Container>
        <Container
          style={{
            height: "100vh",
            display: "grid",
            // placeContent: "center",
            gap: "20px",
          }}
        >
          <Container
            style={{
              margin: "auto",
              textAlign: "center",
            }}
          >
            <h1>Entrevistame</h1>
            <p style={{ width: "50%", margin: "10px auto" }}>
              <Code>Entrevistame</Code> es una plataforma de{" "}
              <Code>dominicanos</Code> para <Code>dominicanos</Code> la cual
              permite la creación de <Code>#room</Code> que es una sala para{" "}
              <Code>video conferencia</Code> y para compartir{" "}
              <Code>live-coding</Code> gracias Monaco Editor.
            </p>
            <p style={{ width: "50%", margin: "auto" }}>
              La idea surge de la necesidad de poder tener entrevistas tecnicas{" "}
              <Code>falas</Code>, tambien de pullar un poco con{" "}
              <Code>Elixir & Phoenix Channel</Code> y al mismo tiempo permitir
              el <Code>live-coding</Code> para demostraciones de{" "}
              <Code>Data Strucure</Code>, y otras cosas donde sea necesario el
              uso de código o pseudoco.
            </p>
            <p>Nota: En realidad es proyecto personal xD</p>
          </Container>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <Card title="Entrar Entrevista">
              <Container>
                <p>
                  Ingrese el <Code>#room</Code> y comienza la entrevista o el{" "}
                  <Code>pair programming</Code> con tus compañeros
                </p>
                <Collapse defaultState={true} titleButton="Entrar">
                  <Form>
                    <Input placeholder="Code: #g8g38h"></Input>

                    <Button color="primary">Entrar sala</Button>
                  </Form>
                </Collapse>
              </Container>
            </Card>
            <Card title="Crear Entrevista">
              <Container>
                <p>
                  Crear un <Code>#room</Code> y entrvista a tu candidato o solo
                  practica con tu amigo.
                </p>
                <Collapse defaultState={true} titleButton="Crear">
                  <Form>
                    <Input placeholder="Username"></Input>

                    <Button color="primary">Crear sala</Button>
                  </Form>
                </Collapse>
              </Container>
            </Card>
          </div>
        </Container>
      </Container>
    </Page>
  );
};

export default Home;
