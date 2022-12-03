import { Challenge } from '../../types';
import type { Round } from './types';

export abstract class Day1 implements Challenge<number> {
  part: string;
  private data: string;

  constructor(part: string, data: string) {
    this.part = part;
    this.data = data;
  }

  abstract getAnswer: () => number;

  protected getCleanedData = (): Round[] => {
    return this.data.split('\n').map((round) => round.split(' ') as Round);
  };
}
