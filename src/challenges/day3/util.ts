import { Challenge } from '../../types';
import { data } from './data';
import { TwoCompartmentSack } from './types';

export abstract class DayThree implements Challenge<number> {
	part: string;
	private data = data;

	constructor(part: string) {
		this.part = `Day 2 ${part}`;
		this.data = data;
	}

	abstract getAnswer: () => number;

	protected getCleanedData = (): TwoCompartmentSack[] => {
		return this.data.split('\n').map((sack) => {
			const middle = sack.length / 2;
			const firstCompartment = sack.slice(0, middle);
			const secondCompartment = sack.slice(middle, sack.length);
			return [firstCompartment, secondCompartment];
		});
	};
}
