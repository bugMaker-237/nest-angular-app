export class Pagination<T> {
  constructor(
    public data: T[],
    public pageIndex: number,
    public totalCount: number
  ) {}
}
