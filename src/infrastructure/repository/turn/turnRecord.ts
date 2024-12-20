export class TurnRecord {
  constructor(
    private _id: number,
    private _gameId: number,
    private _turn_count: number,
    private _nextDisc: number | undefined,
    private _endAt: Date
  ) {}

  get id() {
    return this._id;
  }

  get nextDisc() {
    return this._nextDisc;
  }

  get endAt() {
    return this._endAt;
  }
}
