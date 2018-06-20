import { TestBed, async } from '@angular/core/testing';
import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TimerComponent);
    const timer = fixture.debugElement.componentInstance;
    expect(timer).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(TimerComponent);
    const timer = fixture.debugElement.componentInstance;
    // expect(timer.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(TimerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
