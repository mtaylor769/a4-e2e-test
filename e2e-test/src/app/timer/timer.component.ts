import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  private timer;

  public isRunning = false;
  public countdownSeconds = 0;
  public originalInput;
  public input = {
    hours: null,
    minutes: null,
    seconds: null
  };

  public startTimer(): void {
    this.updateCountdownSeconds();
    this.isRunning = true;
    this.originalInput = Object.assign({}, this.input);

    this.timer = setInterval(() => {
      if (this.countdownSeconds > 1) {
        this.countdownSeconds--;
        this.updateCountdownDisplay();
      } else {
        this.stopTimer();
        alert('Finished!');
      }
    }, 1000);
  }

  public stopTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.isRunning = false;
  }

  public toggleTimer(): void {
    if (this.isRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  public resetTimer(): void {
    this.stopTimer();
    this.input = this.originalInput;
  }

  // Convert user input into a total seconds value for decrementing
  private updateCountdownSeconds(): void {
    const hourSeconds = parseInt(this.input.hours || '0', 10) * 60 * 60;
    const minuteSeconds = parseInt(this.input.minutes || '0', 10) * 60;
    const seconds = parseInt(this.input.seconds || '0', 10);

    this.countdownSeconds = hourSeconds + minuteSeconds + seconds;
  }

  // Update 'input' property, used for showing current timer value in UI
  private updateCountdownDisplay(): void {
    this.input.hours = Math.floor(this.countdownSeconds / 60 / 60);
    this.input.minutes = Math.floor((this.countdownSeconds / 60) % 60);
    this.input.seconds = this.countdownSeconds % 60;
  }

}
