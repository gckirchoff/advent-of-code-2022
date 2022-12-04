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
			const priority = this.priority.getPriority(repeatedItem);
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
	]: TwoCompartmentSack): keyof typeof this.priority.priorities => {
		const firstCompartmentMap = this.priority.makeMap(firstCompartment);
		for (let i = 0; i < secondCompartment.length; i++) {
			const item = secondCompartment[i] as Alphabetical;
			if (item in firstCompartmentMap) {
				return item;
			}
		}
		throw new Error('No repeated items');
	};
}

export const dayThreePartOne = new PartOne();
