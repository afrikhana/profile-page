import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  localTime: string = '';
  private timerInterval: any;

  ngOnInit(): void {
    this.updateTime();
    this.timerInterval = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private updateTime(): void {
    const now = new Date();
    const localTime = new Date(now.getTime() + (now.getTimezoneOffset() + 180) * 60000);
    this.localTime = localTime.toLocaleTimeString('en-GB', { hour12: false });
  }
}
