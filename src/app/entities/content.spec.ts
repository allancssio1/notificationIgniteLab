import { Content } from './content';

describe('Notification Content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('alguma coisa deu certo entre eles!');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification with less than 5 carcteries', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('it should not be able to create a notification with more than 5 carcteries', () => {
    expect(() => new Content(''.repeat(241))).toThrow();
  });
});
