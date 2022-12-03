import { Choice, Result, Round } from '../types';
import { DayTwo } from '../util';

class PartTwo extends DayTwo {
  private whatIChoose = {
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

  constructor(part: string) {
    super(part);
  }

  getAnswer = () => {
    const rounds = this.getCleanedData();
    const myScore = this.calculateScore(rounds);
    return myScore;
  };

  private calculateScore = (rounds: Round[]): number =>
    rounds.reduce((acc, [theirChoice, myStrategy]) => {
      const result = this.howRoundEnds[myStrategy];
      const myChoice = this.whatIChoose[theirChoice][myStrategy];
      acc += myChoice + result;
      return acc;
    }, 0);
}

export const dayTwoPartTwo = new PartTwo('Part 2');
