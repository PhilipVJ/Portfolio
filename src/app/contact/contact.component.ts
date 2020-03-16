import { Component, OnInit } from '@angular/core';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';
import {ApplicationService} from '../shared/services/application.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  gitHubLogo = faGithubSquare;
  facebookLogo = faFacebookSquare;
  youtubeLogo = faYoutubeSquare;
  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.applicationService.setNavBarState('contact');
  }

}
