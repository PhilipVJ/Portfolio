import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {MenuComponent} from './shared/menu/menu.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './portfolio/projects/projects.component';
import {SocialmediaComponent} from './shared/socialmedia/socialmedia.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {BsDropdownModule, CarouselModule, CollapseModule} from 'ngx-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoContentComponent } from './shared/no-content/no-content.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AboutComponent,
    ProjectsComponent,
    SocialmediaComponent,
    ContactComponent,
    HomeComponent,
    NoContentComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    CollapseModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
