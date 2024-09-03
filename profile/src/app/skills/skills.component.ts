import { ChangeDetectionStrategy, Component, OnInit , OnDestroy, ChangeDetectorRef} from '@angular/core';
    interface Stack{
      color: string;
      url: string;
      course: string;
    }
@Component({
  selector: 'app-skills',
  template: `
   <div id="skills">
        <div class='header'>
              <section id='display'>
              <section id='dip'>
            <h3>Skills</h3>
            <h1>Section To Bring <br/>Forth Studied Stack </h1>
            
          </section>
              </section>
              <section id='abt'>
                <p>"A dream is only a dream when its left on a pillow so don't die with an illusion die with a memory 枕に残された夢は夢のまま (Makura ni nokosareta yume wa yume no mama) — A dream left on a pillow remains a dream."

</p>
              </section>
            </div>

        <div class='ccmain'>
            <div id= 'content'>
                    <h1>Print('About:')</h1>
                    <h3>Hello there, and thank you for taking the time to view my portfolio. My name is Brian, and I am a dedicated software 
                      developer with a passion for continuous learning and problem-solving. I thrive on tackling complex 
                      challenges and transforming them into innovative solutions. My enthusiasm for technology drives me to
                      constantly expand my knowledge and skills. Through perseverance and creativity, I aim to achieve excellence in every project I undertake. 
                      Join me on this journey of discovery and achievement as we push the boundaries of what is possible together.</h3>

            </div>
                <div id= 'stack'>
                      <h3>Stack</h3>
                      <div class='main'>
                        <section id='sst' *ngFor="let item of stack">
                          <div id='colorbox' [ngStyle]="{'background-color': item.color}"></div>
                          <div id='colorline' [ngStyle]="{'background-color': item.color}"></div>
                          <div id='box'>
                            <img [src]="item.url" [alt]="item.course">
                          </div>
                        </section>
                        

                  </div>

                  <section id='footer'>
                            <section>
                            <div id='colorbox'></div>
                            <div id='colorline'></div>
                            <p>GOOD AT</p>
                            </section>
                            <section>
                            <div id='colorbox1'></div>
                            <div id='colorline1'></div>
                            <p id='been'>BEEN A WHILE</p>
                            </section>
                            <section>
                            <div id='colorbox2'></div>
                            <div id='colorline2'></div>
                            <p id='learn'>LEARNING</p>
                            </section>
                        </section>

            </div>

        </div>

      
    
   </div>
  `,
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit{
  // #FF800B-orange #D9D9D9-ligh grey #5D5D5D'dark-grey
    
     stack: Stack[]= [{color:' #FF800B',course:'figma',url:'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/solar_figma-bold.png?alt=media&token=b4756ab0-fc64-4833-8ce5-264e03f30685'},
                     {color:' #FF800B',course:'scss',url:'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/bi_filetype-scss.png?alt=media&token=fd73eb6a-5043-4d85-9322-84ef4b8d1f69'},
                     {color:' #FF800B',course:'css',url:'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/material-symbols-light_css.png?alt=media&token=5315954e-e383-4818-bf2e-0114df23b037'},
                     {color:' #FF800B',course:'html',url:'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/teenyicons_html5-outline.png?alt=media&token=edf7dd42-00c1-48a8-a8d7-821fcd455b67'},
                     {color:' #FF800B',course:'python',url:'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/teenyicons_python-outline.png?alt=media&token=44c80dc9-28d6-4244-b340-716b7e030d66'},
                     {color:' #FF800B',course:'typescript',url:'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/teenyicons_typescript-outline.png?alt=media&token=9aa5d59d-fee3-4c87-8ad2-8ae97efb990f'},
                     {color:' #D9D9D9',course:'javascript',url:'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/teenyicons_javascript-outline.png?alt=media&token=ffe7b3b4-22c2-4d55-b484-e929849e9ecd'},
                     {color:' #FF800B',course:'angular',url:'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/simple-icons_angular.png?alt=media&token=00d82dc2-1734-47fd-abae-ff44c8ec8637'},
                     {color:' #D9D9D9',course:'react',url:'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/simple-icons_react.png?alt=media&token=3c2c6ea8-c9a8-45d7-907d-3595a504c677'},
                     {color:' #FF800B',course:'flask',url:'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/simple-icons_flask.png?alt=media&token=971fbf84-f80a-456a-9c1b-7f143f324a51'},
                     {color:' #FF800B',course:'git',url:'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/ant-design_github-filled.png?alt=media&token=b3bce54e-0fb9-4591-ad4f-5cbaf01621e4'},
                     {color:'#5D5D5D',course:'webflow',url:'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/simple-icons_webflow.png?alt=media&token=d391fe1a-9691-40eb-a814-5ac2d177b283'},
                     ];

      constructor(){}

      ngOnInit(): void {
          this.logStack();
      }

      logStack(): void{
        for (let i:number = 0; i < this.stack.length; i++){
          console.log(`${this.stack[i].course} has color ${this.stack[i].color}`);
        }
      }


  


}



