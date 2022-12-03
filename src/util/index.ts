import { Challenge } from '../types';

export class PageUpdater {
  private part: HTMLElement;
  private answer: HTMLElement;
  private errorText = 'No part or answer span elements provided';

  constructor(part: HTMLElement | null, answer: HTMLElement | null) {
    if (!part || !answer) {
      this.createWarningMessage();
      throw new Error(this.errorText);
    }
    this.part = part;
    this.answer = answer;
  }

  updatePage = (challenge: Challenge<any>): void => {
    this.part.textContent = challenge.part;
    this.part.style.color = 'green';
    this.answer.textContent = challenge.getAnswer();
    this.answer.style.color = 'red';
  };

  private createWarningMessage = () => {
    const warning = document.createElement('h1');
    warning.style.color = 'red';
    warning.style.position = 'absolute';
    warning.style.top = '50px';
    warning.style.left = '50%';
    warning.style.transform = 'translate(-50%, 0%)'
    warning.textContent = this.errorText;
    const body = document.querySelector('body');
    body?.appendChild(warning);
  };
}
