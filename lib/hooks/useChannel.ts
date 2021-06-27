import { useContext, useEffect } from "react";
import { SocketContext, SocketContextType } from "../context/socket-context";

export const useChannel = (_channelName: string): string[] => {
  // const [channel, _setChannel] = useState();
  const { socket } = useContext<SocketContextType>(SocketContext);

  useEffect(() => {
    if (!socket) return;

    // const channel = socket.channel(channelName, {
    //   params: {
    //     klk: "dasds"
    //   }
    // });

    // channel
    //   .join()
    //   .receive('ok', () => {
    //     setChannel(channel);
    //   });

    // return () => {
    //   channel.leave();
    // };
  }, [socket]);

  return [];
};
