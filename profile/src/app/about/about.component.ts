import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div id='about'>
      <div class="content">
        <h1>About</h1>
        <h2>Understanding one's self</h2>
        <p>Hello there thanks for taking your time to see
           my portfolio, my name in Brian and my 
          fervor for technology and penchant for creative problem-solving have 
          always been driving forces in my journey. As a self-taught developer in various 
          domains of Software Development, i've cultivated resourcefulness and adaptability,
          The Future am dedicated to achieve isn't the simplest, so the drive of not giving up 
          has always been my talent. I could proudly say that it is my talent. I soar to be a 
          greater me in the upcoming development cycle in both software and games.</p>
      </div>
      <img src={{img1}} alt="flow">
    </div>
  `,
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
    public img1:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/cherry-blossoms-6153384_1280.jpg?alt=media&token=fba562dd-8d3c-40fe-b161-cf5973e868e5' 
}
