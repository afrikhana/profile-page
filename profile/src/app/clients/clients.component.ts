import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'div.app-clients',
  template: `

<nav>
  <section id='hm' [class.active]="isActive" (click)="handleClick('home')">
    <div></div>
    <p>Home</p>
  </section>
  <section id='ab' [class.active]="isActive" (click)="handleClick('about')">
    <div></div>
    <p>About</p>
  </section>
  <section id='sk' [class.active]="isActive" (click)="handleClick('skills')">
    <div></div>
    <p>Skills</p>
  </section>
  <section id='so' [class.active]="isActive" (click)="handleClick('socials')">
    <div></div>
    <p>Social</p>
  </section>
</nav>
<div class="animation start-home">
  <section><div id='vrt'></div></section>
  <section><div id='vrt'></div></section>
  <section><div id='vrt'></div></section>
  <section><div id='vrt'></div></section>
</div>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsComponent {
  isActive = false;

  handleClick(targetId: string) {
    // Set isActive to true for all sections when any section is clicked
    this.isActive = true;

    // Scroll to the target element
    this.scrollToElement(targetId);
  }

  scrollToElement(targetId: string) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}