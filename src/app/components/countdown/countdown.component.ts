import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  constructor(public lang: LanguageService) {}

  // Set the 50th Anniversary Date Here!
  anniversaryDate: Date = new Date('2026-04-16T00:00:00');
  
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  
  private timerInt: any;

  ngOnInit() {
    this.timerInt = setInterval(() => {
      this.updateCountdown();
    }, 1000);
    this.updateCountdown();
  }

  ngOnDestroy() {
    if (this.timerInt) {
      clearInterval(this.timerInt);
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.anniversaryDate.getTime() - now;

    if (distance > 0) {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    } else {
      this.days = this.hours = this.minutes = this.seconds = 0;
    }
  }
}
