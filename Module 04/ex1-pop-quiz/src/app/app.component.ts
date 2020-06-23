import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    readonly question: string = 'How much is 6 * 7';
    readonly choices: string[] = ['41', '42', '43', '-42'];
    readonly correctAnswer: string = '42';

    isCorrect: boolean | null = null;
    selectedAnswer: string | null = null;
    wasAnswered: boolean = false;

    chooseAnswer(answer: string) {
      this.wasAnswered = true;
      this.selectedAnswer = answer;
      this.isCorrect = (this.selectedAnswer === this.correctAnswer);
    }

    reset() {
      this.wasAnswered = false;
      this.selectedAnswer = null;
      this.isCorrect = null;
    }


}
