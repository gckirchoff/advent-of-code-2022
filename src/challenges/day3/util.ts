import { Challenge } from '../../types';
import { data } from './data';

export abstract class DayThree implements Challenge<number> {
	part: string;
	private data = data;

	constructor(part: string) {
		this.part = `Day 2 ${part}`;
		this.data = data;
	}

	abstract getAnswer: () => number;

	protected getCleanedData = (): string[] => this.data.split('\n');
}
