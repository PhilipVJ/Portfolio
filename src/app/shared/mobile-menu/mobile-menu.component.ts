import {Component, HostListener, OnInit} from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {ApplicationService} from '../services/application.service';
import {faFacebookSquare, faGithubSquare, faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {
  barsIcon = faBars;
  isCollapsed = true;
  chosenMenu: string;
  gitHubLogo = faGithubSquare;
  facebookLogo = faFacebookSquare;
  youtubeLogo = faYoutubeSquare;

  constructor(private applicationService: ApplicationService) {
    applicationService.navState.subscribe(result => this.chosenMenu = result);
  }

  ngOnInit() {
    window.addEventListener('resize', (event) => {
      if (this.isCollapsed === false) {
        this.isCollapsed = true;
      }
    });
  }

  clickMenu() {
    if (this.isCollapsed === true) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    }
  }
}
