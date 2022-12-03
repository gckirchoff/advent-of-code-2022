import { PageUpdater } from './util';
import { dayOnePartOne, dayOnePartTwo } from './challenges';

const main = () => {
  const app = document.getElementById('app');
  const pageUpdater = new PageUpdater(app);

  pageUpdater.updatePage([dayOnePartOne, dayOnePartTwo]);
};

main();

export {};
