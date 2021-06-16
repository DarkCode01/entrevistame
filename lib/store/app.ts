import { atom } from "recoil";

export const user = atom<string>({
  key: "username",
  default: "",
});

export const currentRoom = atom<string>({
  key: "currentRoom",
  default: "",
});
