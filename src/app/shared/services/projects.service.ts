import {Injectable} from '@angular/core';
import {Project} from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  allProjects: Project[];

  constructor() {
    this.makeProjects();
  }

  makeProjects() {
    const whenHellArrived: Project = {
      category: 'Unity',
      // tslint:disable-next-line:max-line-length
      detailedDescription: 'When Hell Arrived is the first big project I made using the Unity Engine. You control the character John and must fight off monsters near his home in the woods to continue his quest to find his wife.' +
        // tslint:disable-next-line:max-line-length
        ' In the beginning of the game you can hear, and see a plane in the sky, which is controlled using the new DOTS technology in the engine.',
      smallDescription: 'First person shooter where you must fight off monsters in order to survive',
      img: 'assets/images/projects/WhenHellArrived.png',
      techniques: 'Animations, DOTS, Navigation, Physics',
      title: 'When Hell Arrived',
      tools: ['Unity, Visual Studio'],
      downloadLink: 'https://www.dropbox.com/s/t7tgqyz6kggqdu5/When%20Hell%20Arrived.rar?dl=0',
      isSchoolProject: true
    };
    const zondi: Project = {
      category: 'Unity',
      // tslint:disable-next-line:max-line-length
      detailedDescription: 'This is the second big project in the Game Development class, where the goal was to make a 2D game, which should be made using some specific tools and techniques in the Unity Engine. ' +
        'The game consists of 3 maps, where you meet different kinds of enemies and can pick up various different items on your way.',
      smallDescription: '2D platformer where you control the fox Zondi',
      img: 'assets/images/projects/Zondi.png',
      techniques: 'Tilemap, Sprites, Scriptable Objects',
      title: 'The adventures of Zondi',
      tools: ['Unity, Visual Studio'],
      downloadLink: 'https://www.dropbox.com/s/2ccdhy40jbhlo21/Zondi.rar?dl=0',
      isSchoolProject: true
    };
    const webCrawler: Project = {
      category: 'Windows Forms',
      // tslint:disable-next-line:max-line-length
      detailedDescription: 'Building an efficient web crawler, which behaves politely on the Internet isn\'t a straight forward task and' +
        // tslint:disable-next-line:max-line-length
        ' took a bit longer than I first anticipated. This piece of software allows the user to scrape the web for a searchword, at a given depth, with x amount of agents.',
      smallDescription: 'Windows application with several options for crawling the web',
      img: 'assets/images/projects/WebCrawler.png',
      techniques: 'Multithreading, Autonomous Agents',
      title: 'WebCrawler',
      tools: ['Visual Studio'],
      githubLink: 'https://github.com/PhilipVJ/WebCrawler',
      isSchoolProject: true
    };
    const portfolioSite: Project = {
      category: 'Angular',
      // tslint:disable-next-line:max-line-length
      detailedDescription: 'This is the actual website you are visiting right now. It is made using the Angular framework and later deployed to Firebase Hosting. I made it to have my work easily accessible for others to see - but also just for fun',
      smallDescription: 'Web application made using Angular and ngx-bootstrap',
      img: 'assets/images/projects/portfolio.png',
      techniques: 'Angular, ngx-bootstrap',
      title: 'Philip Jensen',
      isSchoolProject: false,
      tools: ['WebStorm, Firebase'],
      githubLink: 'https://github.com/PhilipVJ/Portfolio/',
    };
    const mazenko: Project = {
      category: 'Unity',
      // tslint:disable-next-line:max-line-length
      detailedDescription: 'Mazenko was my exam project in game development and is build using DOTS. It consists of three different levels and you control the ' +
        'player using the arrow keys. The space button makes you jump and ZXC controls the camera.',
      smallDescription: '3D platformer where you control a ball through mazes in a race against time.',
      img: 'assets/images/projects/Mazenko.png',
      techniques: 'DOTS, ECS,  ProBuilder',
      title: 'Mazenko',
      tools: ['Unity, Visual Studio'],
      downloadLink: 'https://www.dropbox.com/s/hw2cqxdp1hyzy8l/Mazenko.rar?dl=0',
      githubLink: 'https://github.com/PhilipVJ/Mazenko',
      isSchoolProject: true
    };
    const agentify: Project = {
      category: 'Unity',
      // tslint:disable-next-line:max-line-length
      detailedDescription: 'This is my exam project in Autonomous Agents and is a package for Unity, which makes it possible to make autonomous agents' +
        // tslint:disable-next-line:max-line-length
        ' in games. It is a behaviour-based control framework with a lot of additional features. The project also contains a demo, which shows some of its ' +
        'capabilities ',
      smallDescription: 'A package for Unity which makes it possible to make autonomous agents in games.',
      img: 'assets/images/projects/Agentify.png',
      techniques: 'Behaviour-based control',
      title: 'Unity Agentify',
      tools: ['Unity, Visual Studio'],
      githubLink: 'https://github.com/PhilipVJ/Unity-Agentify',
      isSchoolProject: true
    };
    const celeritem: Project = {
      category: 'Android',
      // tslint:disable-next-line:max-line-length
      detailedDescription: 'This is my exam project in Mobile Programming and is an exercise-tracking application, which makes it possible to realtime track' +
        ' the users activities and find other users to do exercises with.',
      smallDescription: 'An exercise-tracking application for Android',
      img: 'assets/images/projects/Celeritem.png',
      techniques: 'Firebase, Google Maps, SQLite, GPS',
      title: 'Celeritem',
      tools: ['Android Studio'],
      githubLink: 'https://github.com/PhilipVJ/Celeritem',
      isSchoolProject: true
    };
    const lystFiskeren: Project = {
      category: 'Angular',
      // tslint:disable-next-line:max-line-length
      detailedDescription: 'This is my final exam project from when I was studying Computer Science at EASV. It is an angular webapp using NgRx for state management. ' +
        'The app is using several Google services through an API made with NestJS. Testing is done with Jest and Cypress and the design is made with the help of Bootstrap. ' +
        'There are two types of users - admins and partners. Partners can log in and send images and videos to the admins who later can review the files and publish them as part of articles to' +
        ' the public section of the application.',
      smallDescription: 'A social media-like platform for fishermen',
      img: 'assets/images/projects/lystfiskeren_admin_menu.png',
      techniques: 'Angular, NestJS, NgRx, Cypress',
      title: 'Lystfiskeren',
      additionalImages: ['assets/images/projects/lystfiskeren_partner_send.png', 'assets/images/projects/lystfiskeren_admin_beskeder.png', 'assets/images/projects/lystfiskeren_admin_brugere.png'],
      tools: ['Webstorm, Adobe XD, Firebase'],
      isSchoolProject: true
    };

    const projectList: Project[] = [whenHellArrived, zondi, webCrawler, portfolioSite, mazenko, agentify, celeritem, lystFiskeren];
    this.allProjects = projectList;
  }

  getAllProjects(): Project[] {
    return this.allProjects;
  }

  getProjectsByCategory(category: string): Project[] {
    const categoryList: Project[] = [];
    for (const project of this.allProjects) {
      if (project.category === category) {
        categoryList.push(project);
      }
    }
    return categoryList;
  }
}
