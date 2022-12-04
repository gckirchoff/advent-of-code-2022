import { Alphabetical } from '../types';
import { Priority } from '../util';

export class Group {
	private sacks: string[];
	private numOfElves: number;
	private priority = new Priority();

	constructor(sacks: string[]) {
		this.sacks = sacks;
		this.numOfElves = sacks.length;
	}

	getCommonItem = (): Alphabetical => {
		const elvesToMap = this.sacks.slice(0, this.numOfElves - 1);
		const testElf = this.sacks[this.numOfElves - 1];
		const elfMaps = elvesToMap.map(this.priority.makeMap);
		for (let i = 0; i < testElf.length; i++) {
			const item = testElf[i] as Alphabetical;
			const allElvesContainItem = elfMaps.every(
				(mappedSack) => item in mappedSack
			);
			if (allElvesContainItem) {
				return item;
			}
		}
		throw new Error('Not all elves share a common item');
	};
}
