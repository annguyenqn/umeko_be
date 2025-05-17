export class NotificationError extends Error {
  statusCode: number;
  errorCode: string;

  constructor(errorCode: string, message: string, statusCode: number = 400) {
    super(message); // Gọi constructor của lớp cha Error

    // Đảm bảo rằng tên của lỗi sẽ được sử dụng chính xác trong stack trace
    this.name = this.constructor.name; 

    // Gán các thuộc tính tùy chỉnh
    this.errorCode = errorCode;
    this.statusCode = statusCode;

    // Chỉnh sửa stack trace để dễ dàng debugging (được hỗ trợ trong Node.js)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotificationError);
    }
  }

  // Tùy chọn: Override toString để hiển thị đầy đủ thông tin lỗi khi cần
  toString() {
    return `${this.name} (${this.statusCode}): ${this.message} | ErrorCode: ${this.errorCode}`;
  }
}
