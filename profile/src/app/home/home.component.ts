import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div id='home'>
      <div id="content">
        <!-- section 1 -->
        <div id='cn1'>
          <h2>CREATIVE</h2>
          <h3 id='web'>WEB</h3>
          <Section id='veiw'><h3 id='des'>DESIGN</h3>
                <h3 id='and'>&</h3>
              </Section>
          <h3 id='dev'>DEVELOPMENT</h3>
        </div>
        <!-- section2 -->
        <section id='cn2'>
          <h3 id='class'>Class</h3>
          <h3>Brains in Action</h3>
          <h3 id='brackets'>()</h3>
        </section>

        <!-- fotter -->
      <div id='footer'>
          <button><span class="material-symbols-outlined">
arrow_cool_down
</span></button>
         
        </div>
        
      </div>

      
    </div>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
   
}
