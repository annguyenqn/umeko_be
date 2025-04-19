// src/common/filters/spaced-repetition-exception.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { SpacedRepetitionError } from '../errors/spaced-repetition-error';

@Catch(HttpException)
export class SpacedRepetitionExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    let errorResponse: any;

    // Kiểm tra nếu exception là SpacedRepetitionError
    if (exception instanceof SpacedRepetitionError) {
      errorResponse = {
        status: 'error',
        message: exception.message,
        errorCode: exception.errorCode,
        statusCode: exception.statusCode,
      };
    } else {
      // Mặc định xử lý cho các lỗi khác
      errorResponse = {
        status: 'error',
        message: 'Internal Server Error',
        statusCode: status,
      };
    }

    response.status(status).json(errorResponse);
  }
}
