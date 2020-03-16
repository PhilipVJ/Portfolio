import {Component, OnInit} from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {ApplicationService} from '../services/application.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  barsIcon = faBars;
  chosenMenu: string;
  isCollapsed = true;


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

}
