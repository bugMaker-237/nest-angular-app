import { ProblemCodes } from './ProblemCodes';

export class AppError {
  descriptions: any[];
  errorId: ProblemCodes;
  constructor(code: ProblemCodes, ...err: Error[]);
  constructor(code: ProblemCodes, ...err: string[]);
  constructor(code: ProblemCodes, ...err: (Error | string)[]);
  constructor(code: ProblemCodes, ...err: (Error | string)[]) {
    this.errorId = code;
    this.descriptions = err?.map((e: any) => (e.message || e).toString());
  }

  static exception(error: any): AppError {
    return new AppError(
      ProblemCodes.EXCEPTION,
      error.message || error.toString()
    );
  }
  static notFound(name: string, value: string): AppError {
    return new AppError(
      ProblemCodes.NOT_FOUND,
      `The ${name}: ${value} was not found`
    );
  }
  static badRequest(err: string): AppError {
    return new AppError(ProblemCodes.BAD_REQUEST, err);
  }
}
