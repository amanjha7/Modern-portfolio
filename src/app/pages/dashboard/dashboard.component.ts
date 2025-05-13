import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  featuredProjects = [
    {
      title: 'Portfolio Website',
      tech: 'Angular, SCSS, Material',
      description: 'A sleek personal website with projects, achievements, and contact form.',
      link: 'https://yourportfolio.com'
    },
    {
      title: 'Task Manager App',
      tech: 'Angular, Firebase',
      description: 'A productivity app to manage daily tasks and goals.',
      link: 'https://github.com/yourrepo'
    }
  ];

  achievements = [
    { title: 'Top 1% in LeetCode', detail: 'Solved 500+ problems and ranked globally.' },
    { title: 'Google Developer Certificate', detail: 'Completed Advanced Web Development training.' },
    { title: 'Hackathon Winner', detail: 'Won 1st place at DevBytes 2023 Hackathon.' }
  ];
}
