import { Alphabetical, TwoCompartmentSack } from '../types';
import { DayThree } from '../util';

class PartOne extends DayThree {
	private priorities = {
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
	constructor() {
		super('Part 1');
	}

	getAnswer = () => {
		const sacks = this.getCleanedData();
		const prioritySum = sacks.reduce((acc, sack) => {
			const repeatedItem = this.getRepeatedItem(sack);
			const priority = this.priorities[repeatedItem];
			acc += priority;
			return acc;
		}, 0);
		return prioritySum;
	};

	private getRepeatedItem = ([
		firstCompartment,
		secondCompartment,
	]: TwoCompartmentSack): keyof typeof this.priorities => {
		const firstCompartmentMap = this.makeMap(firstCompartment);
		for (let i = 0; i < secondCompartment.length; i++) {
			const item = secondCompartment[i] as Alphabetical;
			if (item in firstCompartmentMap) {
				return item;
			}
		}
		return 'a';
	};

	private makeMap = <T extends keyof typeof this.priorities>(
		items: string
	): { [key in T]: number } =>
		items.split('').reduce((acc, item) => {
			if (!item.match(/[a-zA-Z]/)) {
				throw new Error('Item is not alphabetical');
			}
			if (!(item in acc)) {
				acc[item as T] = 0;
			}
			acc[item as T]++;
			return acc;
		}, {} as { [key in T]: number });
}

export const dayThreePartOne = new PartOne();
