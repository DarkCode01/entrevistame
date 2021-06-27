import { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { v4 as uuid } from "uuid";
import { settings, language, themeEditor } from "../../lib/store/editor";
import Monaco from "monaco-editor";
import EditorBase from "@monaco-editor/react";

interface IEditor {
  room: string;
  channel: any;
  userId: string;
}

export default function Editor({
  userId,
  room,
  channel,
}: IEditor): JSX.Element {
  const monacoRef = useRef(null);
  const options = useRecoilValue(settings);
  const currentLanguage = useRecoilValue(language);
  const currentTheme = useRecoilValue(themeEditor);
  const [pathId, setPathId] = useState(uuid());
  const [content, setContent] = useState(`defmodule Entrevistame do
  @docmodule """
    Room: #${room}
    users: (2)
  """

  def print(user), do: IO.puts "Bienvenido #{user}"
end
`);

  const handleEditorWillMount = (monaco: any) => {
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  };

  const handleEditorDidMount = (
    editor: Monaco.editor.IEditor,
    _monaco: any
  ) => {
    monacoRef.current = editor;
  };

  const handleEditorOnChange = (
    value: string | undefined,
    _event: Monaco.editor.IModelContentChangedEvent
  ) => {
    channel.push("shout", { sender: userId, value });
  };

  useEffect(() => {
    if (channel && monacoRef) {
      channel.on("shout", ({ sender, value }) => {
        if (sender !== userId) {
          setContent(value);
          setPathId(uuid());
        }
      });
    }

    return () => {
      channel && monacoRef && channel.leave();
    };
  }, [channel, monacoRef]);

  return (
    <EditorBase
      height="92vh"
      defaultLanguage={currentLanguage}
      path={pathId}
      defaultValue={content}
      theme={currentTheme}
      options={options}
      beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
      onChange={handleEditorOnChange}
      loading={<>Cargando</>}
    />
  );
}
