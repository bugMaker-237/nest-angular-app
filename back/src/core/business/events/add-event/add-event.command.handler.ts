import { IEventRepository } from '@domain/repo/i.event.repository';
import { AppResult } from '@domain/value-objects/app-result';
import { AppError } from '@domain/value-objects/app-error';
import { AddEventRequest } from './add-event.request';
import { AddEventResponse } from './add-event.response';

export abstract class IAddEventCommandHandler {
  abstract execute(
    request: AddEventRequest
  ): Promise<AppResult<AddEventResponse>>;
}

@DependencyInjection.Inject()
export class AddEventCommandHandler implements IAddEventCommandHandler {
  constructor(private readonly _eventRepo: IEventRepository) {}

  public async execute(
    request: AddEventRequest
  ): Promise<AppResult<AddEventResponse>> {
    const validationResult = this.validate(request);

    if (!validationResult.isValid)
      return AppResult.failure(AppError.badRequest(validationResult.error));

    const event = await this._eventRepo.addEvent(
      request.name,
      request.description,
      new Date(request.startDate),
      new Date(request.endDate)
    );
    return AppResult.success(new AddEventResponse(event));
  }

  private validate(request: AddEventRequest): {
    isValid: boolean;
    error: string;
  } {
    const endDate = new Date(request.endDate);
    const startDate = new Date(request.startDate);
    let error = '';

    if (!(typeof request.name === 'string')) error = 'Name is not a string';
    if (!(typeof request.description === 'string'))
      error = 'Description is not a string';
    if (isNaN(endDate.getDate())) error = 'Incorrect date format for end date';
    if (isNaN(startDate.getDate()))
      error = 'Incorrect date format for start date';
    if (endDate < startDate) error = 'End dqte cqnnot be less than start date';

    return {
      error,
      isValid: !error
    };
  }
}
