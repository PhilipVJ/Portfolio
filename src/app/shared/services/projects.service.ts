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
        ' In the beginning of the game you can hear, and see a plane in the sky, which is controlled using the new DOTS technology in the engine',
      smallDescription: 'First person shooter where you must fight off monsters in order to survive',
      img: 'assets/images/projects/WhenHellArrived.png',
      techniques: ['Animations, DOTS, Navigation, Physics'],
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
      techniques: ['Tilemap, Sprites, Scriptable Objects'],
      title: 'The adventures of Zondi',
      tools: ['Unity, Visual Studio'],
      downloadLink: 'https://www.dropbox.com/s/2ccdhy40jbhlo21/Zondi.rar?dl=0',
      isSchoolProject: true
  }

    const projectList: Project[] = [whenHellArrived, zondi];
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
