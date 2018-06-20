import { browser, by, element } from 'protractor';
import { TimerComponent } from '../../src/app/timer/timer.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class TimerPage {
  private TimerComponent = new TimerComponent();

  public navigateTo() {
    return browser.get('/');
  }
  public getHeaderText() {
    return element(by.css('app-root h1')).getText();
  }

  public getTimer() {
    return this.TimerComponent;
  }

  public catchAlert() {
    const v = setTimeout(function () {
      browser.switchTo().alert().then(function (alert) {
        alert.accept();
        return true;
      });
    }, 2000);
  }
  public getHoursEl() {
    return element(by.css('app-timer input[name=hours]'));
  }
  public getMinutesEl() {
    return element(by.css('app-timer input[name=minutes]'));
  }
  public getSecondsEl() {
    return element(by.css('app-timer input[name=seconds]'));
  }
  public setHoursText(nval) {
    this.TimerComponent.input['hours'] = nval;
    this.getHoursEl().sendKeys(nval);  // TODO: This does NOT work without by.binding
    return this.TimerComponent.input['hours'];
  }
  public setMinutesText(nval) {
    this.TimerComponent.input['minutes'] = nval;
    this.getMinutesEl().sendKeys(nval); // TODO: This does NOT work without by.binding
    return this.TimerComponent.input['minutes'];
  }
  public setSecondsText(nval) {
    this.TimerComponent.input['seconds'] = nval;
    this.getSecondsEl().sendKeys(nval); // TODO: This does NOT work without by.binding
    return this.TimerComponent.input['seconds'];
  }

  public toggleTimerButton() {
    // TODO: finish this
    // return element(by.css('app-timer .toggle-button')).click();
  }

  public isRunning() {
    return this.TimerComponent.isRunning;
  }
  public resetTimer() {
    return this.TimerComponent.resetTimer();
  }
  // public setHourText(nval) {
  //   const el = element(by.css('input[name=hours]'));
  //   return el.value = nval;
  //   el.dispatchEvent(new Event('input'));
  // }
  // public setMinuteText(nval) {
  //   return element(by.css('input[name=minutes]')).value = nval;
  // }
  // public setSecondsText(nval) {
  //   return element(by.css('input[name=seconds]')).value = nval;
  // }
}
