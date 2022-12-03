import { Challenge } from '../../types';
import type { Round } from './types';
import { data } from './data';

export abstract class DayTwo implements Challenge<number> {
  part: string;
  private data = data;

  constructor(part: string) {
    this.part = `Day 2 ${part}`;
    this.data = data;
  }

  abstract getAnswer: () => number;

  protected getCleanedData = (): Round[] => {
    return this.data.split('\n').map((round) => round.split(' ') as Round);
  };
}
