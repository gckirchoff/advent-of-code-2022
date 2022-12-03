export enum Choice {
  ROCK = 1,
  PAPER = 2,
  SCISSORS = 3,
}

export enum Result {
  WIN = 6,
  DRAW = 3,
  LOSE = 0,
}

export type Round = [them: 'A' | 'B' | 'C', me: 'X' | 'Y' | 'Z'];
