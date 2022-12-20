import { InMemoryNotificationRepository } from '@test/repositories/inMemoryNotificationRepository.spec';
import { SendNotification } from './sendNotification';

describe('Send notification', () => {
  it('should br able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'nova mente cabeça notificação',
      category: 'social',
      recipientId: 'asdfasdsf-adsfgasdf-adfhataera-asdasd',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
