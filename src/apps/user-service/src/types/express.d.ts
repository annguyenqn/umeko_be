import 'express';

declare module 'express' {
  export interface User {
    id: string;
    email?: string;
  }

  export interface Request {
    user?: User;
  }
}
