// notification.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: true,
})
export class NotificationGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private onlineUsers = new Map<string, string>();

  handleConnection(socket: any) {
    const userId = socket.handshake.query.userId as string;
    if (userId) {
      this.onlineUsers.set(userId, socket.id);
    }
  }

  handleDisconnect(socket: any) {
    for (const [userId, socketId] of this.onlineUsers.entries()) {
      if (socketId === socket.id) {
        this.onlineUsers.delete(userId);
        break;
      }
    }
  }

  isUserOnline(userId: string): boolean {
    return this.onlineUsers.has(userId);
  }

  sendNotification(userId: string, notification: any) {
    const socketId = this.onlineUsers.get(userId);
    if (socketId) {
      this.server.to(socketId).emit('notification', notification);
    }
  }
}
