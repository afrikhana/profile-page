import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div id='about'>
      <div class='header'>
        <section id='display'>
            <section id='dip'><h3>Work</h3>
            <h1>Section To Show</h1></section>
            <h1 id='case'>Case Implemented Ideas</h1>
            
        </section>
        <section id='abt'>
              <p>It's all about your emotions in art not about perfecting what you think is right</p>
        </section>
      </div>
      <div class='content'>
      <button [class.rotated]="isRotated" (click)="rotateButton()">
    <span class="material-symbols-outlined">
      arrow_cool_down
    </span>
  </button>
      </div>
    </div>
  `,
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  isRotated: boolean = false;

  rotateButton() {
    this.isRotated = !this.isRotated;
  }
}
