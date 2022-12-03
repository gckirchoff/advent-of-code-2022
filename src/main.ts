import { PageUpdater } from './util';
import { dayOnePartOne, dayOnePartTwo } from './challenges';

const main = () => {
  const part = document.getElementById('part');
  const answer = document.getElementById('answer');
  const pageUpdater = new PageUpdater(part, answer);

  pageUpdater.updatePage(dayOnePartTwo);
};

main();

export {};
