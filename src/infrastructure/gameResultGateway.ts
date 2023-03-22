import mysql from "mysql2/promise";
import { GameResultRecord } from "./gameResultRecord";

export class GameResultGateway {
  async findForGameId(
    conn: mysql.Connection,
    gameId: number
  ): Promise<GameResultRecord | undefined> {}
}
