import { ChangeDetectionStrategy, Component, OnInit , OnDestroy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
   <div id="skills">
        <div class='header'>
              <section id='display'>
                <section id='dip'>
                  <h3>Work</h3>
                  <h1>Section To Show</h1>
                </section>
                <h1 id='case'>Case Implemented Skills</h1>
              </section>
              <section id='abt'>
                <p>It's all about your emotions in art not about perfecting what you think is right</p>
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
              <p>Stack</p>
              <div class='main'>
                <section>
                  <div id='colorbox'></div>
                  <div id='colorline'></div>
                  <div id='box'>
                    <img src='' alt=''>
                  </div>
                </section>
                <section>
                  <div id='colorbox'></div>
                  <div id='colorline'></div>
                  <div id='box'>
                    <img src='' alt=''>
                  </div>
                </section>
                <section>
                  <div id='colorbox'></div>
                  <div id='colorline'></div>
                  <div id='box'>
                    <img src='' alt=''>
                  </div>
                </section>
              </div>

            </div>

        </div>

      
    
   </div>
  `,
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
    
  


}



