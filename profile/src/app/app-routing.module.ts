import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SocialComponent } from './social/social.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { DesignComponent } from './about/design/design.component';
import { WebsitesComponent } from './about/websites/websites.component';

const routes: Routes = [
  {path: 'about', component:AboutComponent,},
  {path: 'design', component:DesignComponent},
  {path: 'website', component:WebsitesComponent},
  {path: 'skills', component:SkillsComponent},
  {path: 'social', component:SocialComponent},
  {path: 'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
