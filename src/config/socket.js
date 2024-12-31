import { io } from "socket.io-client";

// Thay thế URL bên dưới bằng địa chỉ server của bạn
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

// Kết nối đến Socket.IO server
const socket = io(SOCKET_URL, {
  transports: ["websocket"], // Sử dụng giao thức WebSocket
  reconnectionAttempts: 5, // Cố gắng kết nối lại tối đa 5 lần
});

socket.on("connect", () => {
  console.log(`[INFO] 👉 Connected to server with id: ${socket.id}`);
});

socket.on("disconnect", () => {
  console.log("[INFO] 👉 Disconnected from server");
});

export default socket;
