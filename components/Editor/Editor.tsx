import { useRef } from "react";
import Monaco from "monaco-editor";
import EditorBase from "@monaco-editor/react";

export default function Editor(): JSX.Element {
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
    <EditorBase
      height="92vh"
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
        wordWrapColumn: 110,
        lineHeight: 30,
        links: true,
      }}
      beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
      onChange={handleEditorOnChange}
      loading={<>Cargandodoodod</>}
    />
  );
}
