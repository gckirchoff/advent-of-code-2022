import './style.css';
import { PageUpdater } from './util';
import { dayOnePartOne } from './day1/part1/answer';

const main = () => {
  const part = document.getElementById('part');
  const answer = document.getElementById('answer');
  const pageUpdater = new PageUpdater(part, answer);

  pageUpdater.updatePage(dayOnePartOne);
};

main();

export {};
