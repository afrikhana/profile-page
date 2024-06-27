import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  template: `

    <nav>
      <section id='hm' (click)="scrollToElement('home')"><div></div><p>Home</p></section>
      <section id='ab'(click)="scrollToElement('about')"><div></div><p>About</p></section>
      <section id='sk' (click)="scrollToElement('skills')"><div></div><p>Skills</p></section>
      <section id='so'(click)="scrollToElement('socials')"><div></div><p>Social</p></section>
      
    </nav>
    <div class="animation start-home">
        <section>
        <div id='vrt'></div>
      </section>
        <section >
        <div id='vrt'></div>
      </section>
        <section>
        <div id='vrt'></div>
      </section>
        <section>
        <div id='vrt'></div>
      </section>

      </div>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsComponent implements OnInit {
  @Input() targetId: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  scrollToElement(targetId: string) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
