export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string) {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLenghValid = this.validateContentLength(content);

    if (!isContentLenghValid) throw new Error('Content length is not valid');

    this.content = content;
  }
}
