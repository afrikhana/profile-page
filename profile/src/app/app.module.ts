import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialComponent } from './social/social.component';
import { SharedComponent } from './shared/shared.component';
import { CustomHeadersComponent } from './shared/UI/custom-headers/custom-headers.component';
import { DesignComponent } from './about/design/design.component';
import { WebsitesComponent } from './about/websites/websites.component';
import { OpcityHeaderComponent } from './shared/UI/opcity-header/opcity-header.component';
import { ServicesComponent } from './social/services/services.component';
import { ContactComponent } from './social/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    SocialComponent,
    SharedComponent,
    CustomHeadersComponent,
    DesignComponent,
    WebsitesComponent,
    OpcityHeaderComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ClientsComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    SocialComponent
  ]
})
export class AppModule { }
