// src/common/filters/http-exception.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { CustomError } from '../errors/custom-error';

@Catch(HttpException) 
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    if (status === 401) {
      response.status(401).json({
        message: 'Unauthorized',
        statusCode: 401,
      });
      return;
    }

    // Xử lý lỗi theo kiểu custom
    let errorResponse: any;
    
    if (exception instanceof CustomError) {
      // Custom xử lý lỗi
      errorResponse = {
        status: 'error',
        message: exception.message,
        errorCode: exception.errorCode,
        statusCode: exception.statusCode,
      };
    } else {
      // Mặc định cho các HttpException khác
      errorResponse = {
        status: 'error',
        message: 'Internal Server Error',
        statusCode: status,
      };
    }

    // Trả về lỗi với định dạng JSON
    response.status(status).json(errorResponse);
  }
}
