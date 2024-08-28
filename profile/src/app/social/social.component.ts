import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-social',
  template: `
    <div id="socials">
    <div class='header'>
    <section id='display'>
      <section id='dip'>
        <h3>Work</h3>
        <h1>Section To Show <br/>Case Offered Services</h1>
      </section>
      
    </section>
    <section id='abt'>
      <p>Don't be afraid to move, a sailor skill is proven by the rough storm not the calm sea</p>
    </section>
  </div>

      <app-services></app-services>
      <app-contact></app-contact>
    </div>
  `,
  styleUrls: ['./social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialComponent {

public git: string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/icons8-git-50.png?alt=media&token=5b055011-0d87-4b4e-a6a9-d09ee50dc9b6';
public insta:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/instagram_x8ujcq.svg?alt=media&token=ef755456-c80f-4a03-a47e-9457e0a12513';
public linkedin:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/linkedin_x8smhm.svg?alt=media&token=5e364ba9-f16b-4888-a235-ac906561c18b';
}
