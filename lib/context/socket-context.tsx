import { createContext, useEffect, useState } from "react";
import { Socket } from "phoenix";

export type SocketContextType = {
  socket: any;
};

interface ISocketProvider {
  children: JSX.Element;
}

const SocketContext = createContext<SocketContextType>({ socket: null });

const SocketProvider = ({ children }: ISocketProvider): JSX.Element | null => {
  const [socket, setSocket] = useState();

  alert("asdasdas");

  useEffect(() => {
    const socket = new Socket("ws://localhost:4000/socket");
    socket.connect();

    setSocket(socket);
  });

  if (!socket) return null;

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
