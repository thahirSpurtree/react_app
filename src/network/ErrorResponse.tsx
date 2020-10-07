export interface ErrorResponse {
    timestamp: string;
    status: string;
    message: string;
    details: Array<string>;
    emailErrors: Array<EmailError>;
  }

  export interface EmailError {
    email: string;
    role: string;
    message: string;
  }