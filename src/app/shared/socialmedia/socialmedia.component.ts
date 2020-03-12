import {Component, OnInit} from '@angular/core';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {
  gitHubLogo = faGithubSquare;
  facebookLogo = faFacebookSquare;
  youtubeLogo = faYoutubeSquare

  constructor() {
  }

  ngOnInit() {
  }

}
