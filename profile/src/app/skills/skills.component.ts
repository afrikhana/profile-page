import { ChangeDetectionStrategy, Component, OnInit , OnDestroy, ChangeDetectorRef} from '@angular/core';

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
    <div class="count">
      <h1>Dev Timeline</h1>
        <p>Yr:{{ years }}</p>
        <p>M:{{ months }}</p>
        <p>D:{{ days }}</p>
        <p>Hrs:{{ hours }}</p>
        <p id='min'>Min:{{ minutes }}</p>
        <p id='sec'>Sec:{{ seconds }}</p>
      </div>
      <div class="content">
        <h1>About</h1>
        <h2>Understanding one's self</h2>
        <p>Hello there thanks for taking your time to see
           my portfolio, my name in Brian and my 
          fervor for technology and penchant for creative problem-solving has 
          always been a driving forces in my journey. As a self-taught developer in various 
          domains of Software Development, i've cultivated resourcefulness and adaptability,
          The Future am dedicated to achieve isn't the simplest either.The drive of not giving up 
          has always been my talent and I soar to be a 
          greater me in the upcoming development cycle in both software and games.</p>
      </div>
    <div class="content2">
      <!-- frontennt content -->
      <div id="front">
        <h1>Front <br> end</h1>
        <div class="scroll">
          <img src={{angular}} alt="angular" >

          <img src={{react}} alt="react">

          <img src={{javascript}} alt="java">

          <img src={{typescript}} alt="trypescript">
          <img src={{html}} alt="html5">

          <img src={{css}} alt="css">
          

          <div class="photo-c">
          <p>Angular</p>
          <P>React</P>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>Html5</p>
          <p>Scss/Css</p>
          </div>
        </div>
      </div>
      <!-- front end content -->
          <div id="back">
            <h1>Back <br> end</h1>
           
            <div class="scroll1">
              <img src={{python}} alt="python">
              <img src={{mysql}} alt="sql">
              <img src={{flask}} alt="">

              <div class="photo-c">
          <p>Python</p>
          <P>MSQL</P>
          <p>Flask</p>

          </div>
            </div>
            
          </div>
    </div>
   </div>
  `,
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit, OnDestroy{
  public flask: string ='https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/flask.png?alt=media&token=3c9111d7-edbd-463c-a1f3-be911e2bd9ef'
  public css: string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/css.png?alt=media&token=26b1a58d-8bd7-4e31-97f7-67847e07a3e0'
  public html: string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/html5.jpg?alt=media&token=68e450ce-1f27-497a-85be-b4efe34cdff4'
  public typescript: string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/typescript.png?alt=media&token=195ad19d-cae4-476f-9ab1-67112b8d6430'
  public javascript: string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/javascript.jpg?alt=media&token=dd5c05f3-96e3-4e98-bd93-f262aa1ac729'
 public angular:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/Angular.jpg?alt=media&token=d9b01347-b748-4161-929b-14a2872c3799';
 public react:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/react.jpg?alt=media&token=d7c8fa1c-ee82-4d63-8f87-b513222bf711';
 public python:string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/python.jpg?alt=media&token=9411ed44-d2fc-42ce-a17c-79dabccc233f';
 public mysql: string = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/sql-libraries.jpg?alt=media&token=eb2dfcbe-7a30-4ff1-b5d0-838f33eee02e';
     
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



