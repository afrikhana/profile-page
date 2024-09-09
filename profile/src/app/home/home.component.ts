import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '.app-home',
  template: `
    <div id='home'>
      <div id="content">
        <!-- section 1 -->
        <div id='cn1'>
          <h2>CREATIVE</h2>
          <h3 id='web'>WEB</h3>
         <h3 id='des'>DESIGN <span>&</span></h3>
          <h3 id='dev'>DEVELOPMENT</h3>
        </div>
        <!-- section2 -->
        <section id='cn2'>
          <h3 id='class'>Class</h3>
          <h3>Brains in Action</h3>
          <h3 id='class'>()</h3>
        </section>

 
         
        </div>
        
      </div>

      
    
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
   
}
