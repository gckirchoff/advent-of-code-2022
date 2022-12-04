import { DayThree } from '../util';
import { Group } from './helper';

class PartTwo extends DayThree {
	constructor() {
		super('Part 2');
	}

	getAnswer = () => {
		const sacks = this.getCleanedData();
		const groups = this.groupElves(sacks);
		const prioritySum = groups.reduce((acc, group) => {
			const commonItem = group.getCommonItem();
			acc += this.priority.getPriority(commonItem);
			return acc;
		}, 0);
		return prioritySum;
	};

	private groupElves = (sacks: string[], elvesPerGroup = 3): Group[] => {
		const groups = [];
		for (let i = 0; i < sacks.length; i += elvesPerGroup) {
			groups.push(new Group(sacks.slice(i, i + elvesPerGroup)));
		}
		return groups;
	};
}

export const dayThreePartTwo = new PartTwo();
