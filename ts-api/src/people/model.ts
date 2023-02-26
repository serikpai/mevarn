export class Person {
  id?: number = 0;
  forename?: string = '';
  surname?: string = '';
  age?: number = 0;
}

export class ErrorMessage {
  code: number;
  message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }
}
