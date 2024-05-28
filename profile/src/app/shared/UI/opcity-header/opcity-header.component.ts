import { ChangeDetectionStrategy, Component, OnInit , OnDestroy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-opcity-header',
  templateUrl: './opcity-header.component.html',
  styleUrls: ['./opcity-header.component.scss']
})
export class OpcityHeaderComponent {
  years: number = 0;
  months: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  countdownInterval: any;
 
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
 
  ngOnInit() {
    const startDate = new Date('2023-11-01T00:00:00');
    this.updateCountdown(startDate);
 
    this.countdownInterval = setInterval(() => {
      this.updateCountdown(startDate);
      this.changeDetectorRef.detectChanges(); // Trigger change detection
    }, 1000);
  }
 
  updateCountdown(startDate: Date): void {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - startDate.getTime();
 
    this.seconds = Math.floor((timeDifference / 1000) % 60);
    this.minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    this.hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    this.months = Math.floor(this.days / 30);
    this.years = Math.floor(this.months / 12);
  }
 
  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
}
