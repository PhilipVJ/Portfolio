import {Injectable} from '@angular/core';
import {Project} from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() {
  }

  getProject(): Project[] {
    const testProject: Project = {
      category: 'Android',
      detailedDescription: 'First project in Android',
      smallDescription: 'Small project',
      img: 'assets/images/code.jpg',
      techniques: ['Java'],
      title: 'Dicer',
      tools: ['Android Studios, Paint.NET']
    };
    const testProject2: Project = {
      category: 'Windows Forms',
      detailedDescription: 'Second project ever',
      smallDescription: 'Big project',
      img: 'assets/images/code.jpg',
      techniques: ['C#'],
      title: 'Xbox',
      tools: ['Android Studios, Paint.NET'],
      downloadLink: 'http://www.google.dk',
      githubLink: 'http://www.google.dk'
    };
    const testProject3: Project = {
      category: 'Android',
      detailedDescription: 'Second project in Android',
      smallDescription: 'Medium project',
      img: 'assets/images/code.jpg',
      techniques: ['Other'],
      title: 'Water',
      tools: ['Android Studios, Paint.NET']
    };
    const testProject4: Project = {
      category: 'Android',
      detailedDescription: 'First project in Android',
      smallDescription: 'Small project',
      img: 'assets/images/code.jpg',
      techniques: ['Java'],
      title: 'Mouse',
      tools: ['Android Studios, Paint.NET'],
      githubLink: 'http://www.github.dk'
    };
    const testProject5: Project = {
      category: 'Android',
      detailedDescription: 'Another great project',
      smallDescription: 'Exam project',
      img: 'assets/images/code.jpg',
      techniques: ['Java'],
      title: 'Cat',
      tools: ['Android Studios, Paint.NET'],
      downloadLink: 'http://www.google.dk'
    };
    const projectList: Project[] = [testProject, testProject2, testProject3, testProject4, testProject5];
    return projectList;
  }
}
