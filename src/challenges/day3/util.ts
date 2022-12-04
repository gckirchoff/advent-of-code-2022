import { Challenge } from '../../types';
import { Alphabetical } from './types';
import { data } from './data';

export class Priority {
	priorities = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
		i: 9,
		j: 10,
		k: 11,
		l: 12,
		m: 13,
		n: 14,
		o: 15,
		p: 16,
		q: 17,
		r: 18,
		s: 19,
		t: 20,
		u: 21,
		v: 22,
		w: 23,
		x: 24,
		y: 25,
		z: 26,
		A: 27,
		B: 28,
		C: 29,
		D: 30,
		E: 31,
		F: 32,
		G: 33,
		H: 34,
		I: 35,
		J: 36,
		K: 37,
		L: 38,
		M: 39,
		N: 40,
		O: 41,
		P: 42,
		Q: 43,
		R: 44,
		S: 45,
		T: 46,
		U: 47,
		V: 48,
		W: 49,
		X: 50,
		Y: 51,
		Z: 52,
	} as const;

	getPriority = (item: Alphabetical): number => this.priorities[item];

	makeMap = (items: string) =>
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

export abstract class DayThree implements Challenge<number> {
	part: string;
	protected priority = new Priority();
	private data = data;

	constructor(part: string) {
		this.part = `Day 2 ${part}`;
		this.data = data;
	}

	abstract getAnswer: () => number;

	protected getCleanedData = (): string[] => this.data.split('\n');
}
