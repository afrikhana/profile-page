import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  template: `
    <div id='about'>
      <div class='header'>
        <section id='display'>
          <section id='dip'>
            <h3>Work</h3>
            <h1>Section To Show</h1>
          </section>
          <h1 id='case'>Case Implemented Ideas</h1>
        </section>
        <section id='abt'>
          <p>It's all about your emotions in art not about perfecting what you think is right</p>
        </section>
      </div>
      <div class='content'>
      <button [class.rotated]="isRotated" (click)="toggleContent()">
          <span class="material-symbols-outlined">
            arrow_cool_down
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
  
  constructor() {}

  toggleContent() {
    this.isRotated = !this.isRotated;
  }
}
