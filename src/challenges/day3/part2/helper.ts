import { Alphabetical } from '../types';

export class Group {
	private numOfElves: number;
	private sacks: string[];

	constructor(sacks: string[]) {
		this.sacks = sacks;
		this.numOfElves = sacks.length;
	}

	getCommonItem = (): Alphabetical => {
		const elvesToMap = this.sacks.slice(0, this.numOfElves - 1);
		const testElf = this.sacks[this.numOfElves - 1];
		const elfMaps = elvesToMap.map(this.makeMap);
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

	private makeMap = (items: string) =>
		items.split('').reduce((acc, item) => {
			const alphaItem = this.throwIfNotAlphabetical(item);
			if (!(alphaItem in acc)) {
				acc[alphaItem] = 0;
			}
			acc[alphaItem]++;
			return acc;
		}, {} as { [key in Alphabetical]: number });

	private throwIfNotAlphabetical = (item: string): Alphabetical => {
		if (!item.match(/[a-zA-Z]/)) {
			throw new Error('Item is not alphabetical');
		}
		return item as Alphabetical;
	};
}
