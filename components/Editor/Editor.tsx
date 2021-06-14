import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { settings, currentFile, language, themeEditor } from "../../store";
import Monaco from "monaco-editor";
import EditorBase from "@monaco-editor/react";

export default function Editor(): JSX.Element {
  const monacoRef = useRef(null);
  const options = useRecoilValue(settings);
  const currentPath = useRecoilValue(currentFile);
  const currentLanguage = useRecoilValue(language);
  const currentTheme = useRecoilValue(themeEditor);

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
      defaultLanguage={currentLanguage}
      defaultValue={currentPath.value}
      theme={currentTheme}
      options={options}
      beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
      onChange={handleEditorOnChange}
      loading={<>Cargandodoodod</>}
      path={currentPath.path}
    />
  );
}
