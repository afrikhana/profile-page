import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '.app-about',
  template: `
    <div id='about'>
      <div class='header'>
        <section id='display'>
          <section id='dip'>
            <h3>About</h3>
            <h1>Section To Show <br/>Case Implemented Ideas</h1>
            
          </section>
          
        </section>
        <section id='abt'>
          <p>Art is a reflection of your emotions, not a pursuit of perfection. It's about expressing what you feel, not just perfecting what you think is right. 心の声を信じて、そのままのあなたを描いてください (Kokoro no koe o shinjite, sono mama no anata o egaite kudasai) — Trust the voice of your heart, and paint yourself just as you are.</p>
        </section>
      </div>
      <div class='content'>
        <p>{{ currentName }}<p>
      <button [class.rotated]="isRotated" (click)="toggleContent()">
                <span class="material-symbols-outlined">
          steppers
          </span>
        </button>
      </div>
      <div id='work'>
      <ng-container *ngIf="isRotated; else designContent">
          <app-websites></app-websites>
        </ng-container>
        <ng-template #designContent>
          <app-design></app-design>
        </ng-template>
      </div>
    </div>
  `,
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  isRotated: boolean = false;
  currentName: string = 'Design';
  
  
  ngOnInit() {
    // Check if there's a stored value for the toggle state
    const storedState = localStorage.getItem('isRotated');
    if (storedState) {
      this.isRotated = JSON.parse(storedState);
    }

    const storedName = localStorage.getItem('currentName');
    if (storedName) {
      this.currentName = storedName;
    }
  }

  toggleContent() {
    this.isRotated = !this.isRotated;
    // Store the toggle state in localStorage
    localStorage.setItem('isRotated', JSON.stringify(this.isRotated));

    this.currentName = this.currentName === 'Design' ? 'WebSite' : 'Design';
    // Store the current name in localStorage
    localStorage.setItem('currentName', this.currentName);
  }

  
  
}
