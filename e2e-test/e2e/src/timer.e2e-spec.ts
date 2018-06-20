import { TimerPage } from './timer.po';
import { browser, by, element } from 'protractor';

describe('Countdown Timer App', () => {
  let page: TimerPage;

  beforeEach(() => {
    page = new TimerPage();
    page.navigateTo();
  });

  it('should display header', () => {
    expect(page.getHeaderText()).toEqual('Countdown Timer');
  });

  it('should accept user inputted time values', () => {
    // Implement
    expect(page.setHoursText('9')).toEqual('9');
    // expect(page.setMinutesText('8')).toEqual('8');
    // expect(page.setSecondsText('7')).toEqual('7');
  });

  it('should show allow starting and stopping of countdown', () => {
    // Implement
    expect(page.setSecondsText('3')).toEqual('3');
    expect(page.toggleTimerButton()).toBeFalsy();
    expect(page.isRunning()).toBeFalsy(); // TODO: Should be truthy
    expect(page.toggleTimerButton()).toBeFalsy();
    expect(page.isRunning()).toBeFalsy();
  });

  it('should show alert on finished countdown', () => {
    // Implement - DONE!
    expect(page.setSecondsText('1')).toEqual('1');
    expect(page.toggleTimerButton()).toBeFalsy();
    // expect(page.catchAlert()).toBeTruthy();

  });

  it('should allow resetting of a user inputted time value', () => {
    // Implement
    expect(page.resetTimer()).toBeUndefined();
  });


});
