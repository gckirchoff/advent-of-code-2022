import { Challenge } from '../../../types';
import { data } from '../data';

class D2P1 implements Challenge<number> {
  part = 'day 2 part 1';

  getAnswer = () => {
   return 1;
  };

 
}

export const dayTwoPartOne = new D2P1();
