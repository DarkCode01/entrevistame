import Monaco from "monaco-editor";

type Payload = {
  value: string;
  changes: Monaco.editor.IChange;
};
