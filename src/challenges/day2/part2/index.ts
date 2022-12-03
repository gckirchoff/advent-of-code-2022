import { Challenge } from '../../../types';
import { data } from '../data';
import { Choice, Result } from '../types';
import type { Round } from '../types';

class D2P2 implements Challenge<number> {
  part = 'day 2 part 1';
  private data: string;

  private round = {
    A: {
      X: Choice.SCISSORS,
      Y: Choice.ROCK,
      Z: Choice.PAPER,
    },
    B: {
      X: Choice.ROCK,
      Y: Choice.PAPER,
      Z: Choice.SCISSORS,
    },
    C: {
      X: Choice.PAPER,
      Y: Choice.SCISSORS,
      Z: Choice.ROCK,
    },
  };

  private howRoundEnds = {
    X: Result.LOSE,
    Y: Result.DRAW,
    Z: Result.WIN,
  };

  constructor(data: string) {
    this.data = data;
  }

  getAnswer = () => {
    const rounds = this.getCleanedData();
    const myScore = rounds.reduce((acc, [them, me]) => {
      const result = this.howRoundEnds[me];
      const myChoice = this.round[them][me];
      acc += myChoice + result;
      return acc;
    }, 0);
    return myScore;
  };

  private getCleanedData = (): Round[] => {
    return this.data.split('\n').map((round) => round.split(' ') as Round);
  };
}

export const dayTwoPartTwo = new D2P2(data);
