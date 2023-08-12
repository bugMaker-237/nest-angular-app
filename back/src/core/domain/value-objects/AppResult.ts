import { AppError } from './AppError';

export class AppResult<T = boolean> {
  succeeded = false;
  error: AppError;
  result: T;
  private constructor(result: T);
  private constructor(err: AppError);
  private constructor(result: T | AppError) {
    if (result instanceof AppError) this.error = result;
    else {
      this.succeeded = true;
      this.result = result;
    }
  }

  static failure(error: AppError) {
    return new AppResult(error);
  }

  static success<T = boolean>(result: T = true as any) {
    return new AppResult(result);
  }
}

export type AppResultWithError<T = boolean> =
  | AppResult<T>
  | AppResult<AppError>;
