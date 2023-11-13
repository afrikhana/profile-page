import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div id='home'>
      <img src={{img}} alt="abbyss">
      <h1>Portfolio</h1>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
   public img:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/abbyss.png?alt=media&token=d2e42b59-002f-4850-8c72-6cdca936b3fa' 
}
