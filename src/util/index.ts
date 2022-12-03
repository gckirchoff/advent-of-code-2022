import { Challenge } from '../types';

export class PageUpdater {
  private app: HTMLElement;
  private errorText = 'No app element provided';

  constructor(app: HTMLElement | null) {
    if (!app) {
      this.createWarningMessage();
      throw new Error(this.errorText);
    }
    this.app = app;
  }

  updatePage = (challenges: Challenge<any>[]): void => {
    challenges.forEach((challenge) => {
      const part = challenge.part;
      const answer = challenge.getAnswer();

      this.addChallengeToPage(part, answer);
    });
  };

  private addChallengeToPage = (part: string, answer: string): void => {
    const answerContainer = document.createElement('div');
    answerContainer.classList.add('answer-container');

    const textContainer = document.createElement('div');

    const partText = document.createElement('p');
    partText.classList.add('part');
    partText.innerText = part;

    const answerText = document.createElement('p');
    answerText.classList.add('answer');
    answerText.innerText = answer;

    textContainer.appendChild(partText);
    textContainer.appendChild(answerText);
    answerContainer.appendChild(textContainer);
    this.app.appendChild(answerContainer);
  };

  private createWarningMessage = () => {
    const warning = document.createElement('h1');
    warning.style.color = 'red';
    warning.style.position = 'absolute';
    warning.style.top = '50px';
    warning.style.left = '50%';
    warning.style.transform = 'translate(-50%, 0%)';
    warning.textContent = this.errorText;
    const body = document.querySelector('body');
    body?.appendChild(warning);
  };
}
