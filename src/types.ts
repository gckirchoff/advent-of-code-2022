export interface Challenge<Answer> {
  part: string;
  getAnswer: () => Answer;
}
