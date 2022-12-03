import { PageUpdater } from './util';
import { dayOnePartOne, dayOnePartTwo, dayTwoPartOne } from './challenges';

const main = () => {
  const app = document.getElementById('app');
  const pageUpdater = new PageUpdater(app);

  pageUpdater.updatePage([dayOnePartOne, dayOnePartTwo, dayTwoPartOne]);
};

main();

export {};
