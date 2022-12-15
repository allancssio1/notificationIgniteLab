import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('it should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('nova solicitação'),
      category: 'social',
      recipientId: 'expak_kasdhasdf-ckckshjs-nskshndks',
    });

    expect(notification).toBeTruthy();
  });
});
