import { useRef } from "react";
// import dynamic from "next/dynamic";
import Monaco from "monaco-editor";
import Editor from "@monaco-editor/react";
import Page from "../components/Page";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Footer from "../components/Footer";
// import styles from "../styles/simple.module.css";
// const Jutsu = dynamic(() => import("react-jutsu").then(module => module.Jutsu), { ssr: false });

export const Home = (): JSX.Element => {
  const monacoRef = useRef(null);

  const handleEditorWillMount = (monaco: any) => {
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  };

  const handleEditorDidMount = (
    editor: Monaco.editor.IEditor,
    _monaco: any
  ) => {
    monacoRef.current = editor;
    // monacoRef.current.deltaDecorations([], [
    //   { range: new monaco.Range(, 8, 8, 8), options: { className: styles.mycursor } },
    // ]);
  };

  const handleEditorOnChange = (
    value: string | undefined,
    event: Monaco.editor.IModelContentChangedEvent
  ) => {
    // eslint-disable-next-line no-console
    console.log(value);
    // eslint-disable-next-line no-console
    console.log(event);
  };

  return (
    <Page>
      <Container>
        <Nav />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            height: "80vh",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            {/* <Jutsu
              roomName={"dadasd"}
              displayName={"asdad"}
              password={"asdasdasdsdas"}
              onMeetingEnd={() => console.log('Meeting has ended')}
              loadingComponent={<p>loading ...</p>}
              errorComponent={<p>Oops, something went wrong</p>}
              containerStyles={{
                width: "100%"
              }}
            /> */}
          </div>
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <Editor
              height="100%"
              defaultLanguage="elixir"
              defaultValue={`# Welcome man xD\n#klk`}
              theme="vs-dark"
              options={{
                minimap: {
                  enabled: false,
                },
                fontSize: 16,
                contextmenu: false,
                wordWrap: "bounded",
                scrollbar: {
                  vertical: "auto",
                  handleMouseWheel: true,
                },
                scrollBeyondLastLine: false,
              }}
              beforeMount={handleEditorWillMount}
              onMount={handleEditorDidMount}
              onChange={handleEditorOnChange}
              loading={<>Cargandodoodod</>}
            />
          </div>
        </div>

        <Footer />
      </Container>
    </Page>
  );
};

export default Home;
