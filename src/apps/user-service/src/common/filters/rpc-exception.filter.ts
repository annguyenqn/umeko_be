import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RpcExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const error = exception.getError();
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    // Kiểm tra xem error có phải là đối tượng hợp lệ và chứa thuộc tính statusCode
    if (typeof error === 'object' && error !== null && 'statusCode' in error) {
      const errorResponse = error as { statusCode: number, message: string, error: string }; // Ép kiểu nếu error là đối tượng hợp lệ
      if (errorResponse.statusCode === 401) {
        response.status(401).json({
          message: 'Unauthorized',
          statusCode: 401,
        });
        return;
      }
      
      // Nếu không phải lỗi 401, trả về thông báo lỗi thông thường
      response.status(errorResponse.statusCode || 500).json({
        message: errorResponse.message || 'Unexpected error occurred',
        statusCode: errorResponse.statusCode || 500,
        error: errorResponse.error || 'INTERNAL_SERVER_ERROR',
      });
    } else {
      // Nếu error không phải là đối tượng hợp lệ (có thể là chuỗi), trả về lỗi mặc định
      response.status(500).json({
        message: error || 'Unexpected error occurred',
        statusCode: 500,
        error: 'INTERNAL_SERVER_ERROR',
      });
    }
  }
}
