import { Choice, Result } from '../types';
import { DayTwo } from '../util';

class PartOne extends DayTwo {
  private scoreIGet = {
    X: {
      value: Choice.ROCK,
      theirChoice: {
        A: Result.DRAW,
        B: Result.LOSE,
        C: Result.WIN,
      },
    },
    Y: {
      value: Choice.PAPER,
      theirChoice: {
        A: Result.WIN,
        B: Result.DRAW,
        C: Result.LOSE,
      },
    },
    Z: {
      value: Choice.SCISSORS,
      theirChoice: {
        A: Result.LOSE,
        B: Result.WIN,
        C: Result.DRAW,
      },
    },
  };

  constructor(part: string) {
    super(part);
  }

  getAnswer = () => {
    const rounds = this.getCleanedData();
    const myScore = rounds.reduce((acc, [them, me]) => {
      const myChoice = this.scoreIGet[me];
      acc += myChoice.value + myChoice.theirChoice[them];
      return acc;
    }, 0);
    return myScore;
  };
}

export const dayTwoPartOne = new PartOne('Part 1');
