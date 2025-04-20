import { useEffect } from "react";
import { connectWebSocket, onWebSocketMessage } from "../services/websocket";

export function useWebSocket(url: string, onMessage: (data: any) => void) {
  useEffect(() => {
    connectWebSocket(url);
    const unsubscribe = onWebSocketMessage(onMessage);
    return () => {
      unsubscribe();
    };
  }, [url, onMessage]);
}
