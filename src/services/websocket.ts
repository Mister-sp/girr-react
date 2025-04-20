// Service WebSocket pour GIRR React

let ws: WebSocket | null = null;
let listeners: Array<(data: any) => void> = [];

export function connectWebSocket(url: string) {
  if (ws) return ws;
  ws = new WebSocket(url);
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    listeners.forEach((cb) => cb(data));
  };
  ws.onclose = () => {
    ws = null;
  };
  return ws;
}

export function onWebSocketMessage(cb: (data: any) => void) {
  listeners.push(cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
  };
}

export function sendWebSocketMessage(msg: any) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(msg));
  }
}
