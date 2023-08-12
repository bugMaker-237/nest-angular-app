import { AppError } from './app-error';

export class AppResult<T = boolean> {
  succeeded = false;
  error: AppError;
  result: T;
  protected constructor(result: T);
  protected constructor(err: AppError);
  protected constructor(result: T | AppError) {
    if (result instanceof AppError) this.error = result;
    else {
      this.succeeded = true;
      this.result = result;
    }
  }

  static failure<T>(error: AppError) {
    return new AppResult<T>(error);
  }

  static success<T = boolean>(result: T = true as any) {
    return new AppResult(result);
  }
}
