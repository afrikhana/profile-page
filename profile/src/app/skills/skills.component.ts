import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
   <div id="skills">
    <div class="content1">
      <h2>notable</h2>
      <h1>SKILLS</h1>
      <p>The skills I have attained from <br>internships, school and personal <br>
          development in software development are as follows.</p>
    </div>
    <div class="content2">
      <!-- frontennt content -->
      <div id="front">
        <h1>Front <br> end</h1>
        <div class="scroll">
          <img src={{angular}} alt="angular">
          <img src={{react}} alt="react">
          <img src={{javascript}} alt="java">
          <img src={{typescript}} alt="trypescript">
          <img src={{html}} alt="html5">
          <img src={{css}} alt="css">
        </div>
        <p>Angular <span>React</span></p>
      </div>
      <!-- front end content -->
      <div id="back">
        <h1>Back <br> end</h1>
        <div class="scroll1">
          <img src="" alt="python">
          <img src="" alt="sql">
        </div>
        <p>Python <span>Sql</span></p>
      </div>
    </div>
   </div>
  `,
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  public css: string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/css.png?alt=media&token=26b1a58d-8bd7-4e31-97f7-67847e07a3e0'
  public html: string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/html5.jpg?alt=media&token=68e450ce-1f27-497a-85be-b4efe34cdff4'
  public typescript: string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/typescript.png?alt=media&token=195ad19d-cae4-476f-9ab1-67112b8d6430'
  public javascript: string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/javascript.jpg?alt=media&token=dd5c05f3-96e3-4e98-bd93-f262aa1ac729'
 public angular:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/Angular.jpg?alt=media&token=d9b01347-b748-4161-929b-14a2872c3799';
 public react:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/react.jpg?alt=media&token=d7c8fa1c-ee82-4d63-8f87-b513222bf711';
 public python:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/python.jpg?alt=media&token=9411ed44-d2fc-42ce-a17c-79dabccc233f';
 public mysql: string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/sql-libraries.jpg?alt=media&token=eb2dfcbe-7a30-4ff1-b5d0-838f33eee02e';
}
