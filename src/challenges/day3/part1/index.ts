import { Alphabetical, TwoCompartmentSack } from '../types';
import { DayThree } from '../util';

class PartOne extends DayThree {
	constructor() {
		super('Part 1');
	}

	getAnswer = () => {
		const sacks = this.getCleanedData();
		const compartmentalizedSacks = this.divideSackCompartments(sacks);
		const prioritySum = compartmentalizedSacks.reduce((acc, sack) => {
			const repeatedItem = this.getRepeatedItem(sack);
			const priority = this.priorities[repeatedItem];
			acc += priority;
			return acc;
		}, 0);
		return prioritySum;
	};

	private divideSackCompartments = (sacks: string[]): TwoCompartmentSack[] =>
		sacks.map((sack) => {
			const middle = sack.length / 2;
			const firstCompartment = sack.slice(0, middle);
			const secondCompartment = sack.slice(middle, sack.length);
			return [firstCompartment, secondCompartment];
		});

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
