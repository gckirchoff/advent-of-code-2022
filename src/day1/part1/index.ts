import { Challenge } from '../../types';
import { data } from '../data';

class D1P1 implements Challenge<number> {
  part = 'day 1 part 1';

  getAnswer = () => {
    const elves = data.split('\n\n');
    const cleanedElves = elves.map((elf) => elf.split('\n').map(Number));
    return cleanedElves.reduce((max, elfSnacks) => {
      const calories = this.sumSnacks(elfSnacks);
      if (calories > max) {
        max = calories;
      }
      return max;
    }, 0);
  };

  private sumSnacks = (snacks: number[]): number =>
    snacks.reduce((sum, snack) => sum + snack, 0);
}

export const dayOnePartOne = new D1P1();
