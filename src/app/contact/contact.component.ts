import { Component, OnInit } from '@angular/core';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  gitHubLogo = faGithubSquare;
  facebookLogo = faFacebookSquare;
  youtubeLogo = faYoutubeSquare;
  constructor() { }

  ngOnInit() {
  }

}
