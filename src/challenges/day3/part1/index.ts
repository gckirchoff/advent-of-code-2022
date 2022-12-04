import { DayThree } from '../util';

class PartOne extends DayThree {
	constructor() {
		super('Part 1');
	}

	getAnswer = () => {
		const data = this.getCleanedData();
		console.log('data', data);
		return 55;
	};
}

export const dayThreePartOne = new PartOne();
