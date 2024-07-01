export const initializeWebSocket = (onMessageReceived) => {
    const socket = new WebSocket('ws://localhost:8080/draw'); // Replace with your WebSocket endpoint

    socket.onmessage = onMessageReceived;

    return socket;
};
