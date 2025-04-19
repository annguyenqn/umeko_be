export class CustomError extends Error {
    statusCode: number;
    errorCode: string;
    message: string;
  
    constructor(statusCode: number, errorCode: string, message: string) {
      super(message);
      this.statusCode = statusCode;
      this.errorCode = errorCode;
      this.message = message;
    }
  }
  