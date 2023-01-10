import { HttpException } from '@nestjs/common';

export class ErrorManager {
  public static createSignatureError({
    message,
    status,
  }: {
    message: string;
    status: number;
  }) {
    throw new HttpException(message, status);
  }
}
