import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-social',
  template: `
    <div id="socials">
      <div class="sign">
      <img src={{sign}} alt="signature">
      </div>
      <div class="prof">
      <img src={{prof}} alt="prof">
      </div>
      <div class="logo">
      <img src={{logo}} alt="logo">
      </div>
      
      <div class="links">
        <div class="details">
        <p>Find me on:</p>
        <a href="https://github.com/afrikhana"><img src={{git}} alt="git"></a>
        <a href="https://www.instagram.com/_afrikhan._kiddoh/?next=%2F"><img src={{insta}} alt="insta"></a>
        <a href="https://www.linkedin.com/in/brian-murigi-831473283/"><img src={{linkedin}} alt="linkedin"></a>
        </div>
       
      </div>
    </div>
  `,
  styleUrls: ['./social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialComponent {
public logo:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/Brianmurigi.png?alt=media&token=50545696-16ef-4c9e-89d6-a6364fad95d0'
public prof:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/itachi-profile.jpg?alt=media&token=afe1de29-3e9e-4b8e-b423-00d26b931a7f'
public sign:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/my-signature.png?alt=media&token=7e99d1cc-12f0-4e05-8137-f3fd4fca66a2'
public git: string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/icons8-git-50.png?alt=media&token=5b055011-0d87-4b4e-a6a9-d09ee50dc9b6';
public insta:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/instagram_x8ujcq.svg?alt=media&token=ef755456-c80f-4a03-a47e-9457e0a12513';
public linkedin:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/linkedin_x8smhm.svg?alt=media&token=5e364ba9-f16b-4888-a235-ac906561c18b';
}
