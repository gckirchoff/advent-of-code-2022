import { Challenge } from '../../types';
import { data } from './data';
import { Choice, Result } from './types';
import type { Round } from './types';

abstract class Day1 implements Challenge<number> {
  part = 'day 2 part 1';
  private data: string;
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

  constructor(data: string) {
    this.data = data;
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

  private getCleanedData = (): Round[] => {
    return this.data.split('\n').map((round) => round.split(' ') as Round);
  };
}

export const dayTwoPartOne = new D2P1(data);
