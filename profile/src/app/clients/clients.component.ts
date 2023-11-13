import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  template: `
    <nav>
      <a (click)="scrollToElement('home')">Home</a>
      <a (click)="scrollToElement('about')">About</a>
      <a (click)="scrollToElement('skills')">Skills</a>
      <a (click)="scrollToElement('socials')">Social</a>
      <div class="animation start-home"></div>
    </nav>
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
