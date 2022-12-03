import { Challenge } from '../../types';
import { data } from '../data';

class D1P2 implements Challenge<number> {
  part = 'day 1 part 2';

  getAnswer = () => {
    const elves = data.split('\n\n');
    const lunchBoxes = this.collectElfLunchBoxes(elves);
    const summedLunchBoxes = this.sumCaloriesInEachBox(lunchBoxes);
    const sortedLunchBoxesDesc = summedLunchBoxes.sort((a, b) => b - a);
    const bigBox = this.combineLunchBoxes(0, 3, sortedLunchBoxesDesc);
    return this.sumSnacksInBox(bigBox);
  };

  private collectElfLunchBoxes = (elves: string[]) =>
    elves.map((elf) => elf.split('\n').map(Number));

  private sumCaloriesInEachBox = (lunchBoxes: number[][]): number[] =>
    lunchBoxes.map((lunchBox) => this.sumSnacksInBox(lunchBox));

  private sumSnacksInBox = (box: number[]): number =>
    box.reduce((sum, snack) => sum + snack, 0);

  private combineLunchBoxes = (
    start: number,
    end: number,
    lunchBoxes: number[]
  ) => lunchBoxes.slice(start, end);
}

export const dayOnePartTwo = new D1P2();
