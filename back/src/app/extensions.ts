import { AppError } from '@domain/value-objects/AppError';
import { ProblemCodes } from '@domain/value-objects/ProblemCodes';
import {
  BadRequestException,
  NotFoundException,
  InternalServerErrorException
} from '@nestjs/common';

export class Extensions {
  static handleErrors(error: AppError) {
    switch (error.errorId) {
      case ProblemCodes.BAD_REQUEST:
        throw new BadRequestException(error);

      case ProblemCodes.NOT_FOUND:
        throw new NotFoundException(error);

      case ProblemCodes.EXCEPTION:
        throw new InternalServerErrorException(error);

      default:
        break;
    }
  }
}
