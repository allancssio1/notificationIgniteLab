import { Notification } from '@app/entities/notification';

export class NotificationViewModule {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      contente: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }
}
