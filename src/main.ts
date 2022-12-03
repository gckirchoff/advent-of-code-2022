import { PageUpdater } from './util';
import {
  dayOnePartOne,
  dayOnePartTwo,
  dayTwoPartOne,
  dayTwoPartTwo,
} from './challenges';

const main = () => {
  const app = document.getElementById('app');
  const pageUpdater = new PageUpdater(app);

  pageUpdater.updatePage([
    dayOnePartOne,
    dayOnePartTwo,
    dayTwoPartOne,
    dayTwoPartTwo,
  ]);
};

main();

export {};
