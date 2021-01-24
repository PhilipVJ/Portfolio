import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectsComponent} from './portfolio/projects/projects.component';
import {AboutComponent} from './about/about.component';
import {NoContentComponent} from './shared/no-content/no-content.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: ProjectsComponent},
  { path: 'about', component: AboutComponent },
  { path: '404', component: NoContentComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
