import { atom } from "recoil";
import { editor } from "monaco-editor";

export const language = atom<string>({
  key: "language",
  default: "elixir",
});

export const themeEditor = atom<string>({
  key: "themeEditor",
  default: "vs-dark",
});

export const settings = atom<editor.IStandaloneEditorConstructionOptions>({
  key: "settings",
  default: {
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
  },
});
