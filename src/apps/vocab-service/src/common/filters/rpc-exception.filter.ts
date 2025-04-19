import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RpcExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const error = exception.getError();
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    // Kiểm tra nếu lỗi là đối tượng và có thuộc tính statusCode
    if (typeof error === 'object' && error !== null) {
      const errorResponse = error as { statusCode?: number, message: string, error: string };
      response.status(errorResponse.statusCode || 500).json({
        statusCode: errorResponse.statusCode || 500,
        message: errorResponse.message || 'Unexpected error occurred',
        error: errorResponse.error || 'INTERNAL_SERVER_ERROR',
      });
    } else {
      // Nếu lỗi là một chuỗi, trả về lỗi mặc định
      response.status(500).json({
        statusCode: 500,
        message: error || 'Unexpected error occurred',
        error: 'INTERNAL_SERVER_ERROR',
      });
    }
  }
}
