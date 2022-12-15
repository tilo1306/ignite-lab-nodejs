import { Content } from './content';

describe('Notification contente', () => {
  it('It should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('It should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('abc')).toThrow();
  });

  it('It should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
