// export interface Challenge<Answer> {
//   (partText: HTMLElement | null, answerText: HTMLElement | null): Answer;
// }

// export interface Challenge<Answer> {
//   part: string;
//   getAnswer: () => Answer;
// }

export abstract class Challenge<Answer> {
  part: string;

  constructor(part: string) {
    this.part = part;
  }

  abstract getAnswer: () => Answer;
}
