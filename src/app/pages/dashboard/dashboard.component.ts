import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  featuredProjects = [
    {
      title: 'Document Fixer',
      tech: 'Angular, Node.js',
      description: 'A web application to Modify(docx > pdf, pdf > docx) and format documents and edit Images.',
      link: 'https://document-frontend-3luh.vercel.app',
      image: 'https://i.imgur.com/yourimage1.png'
    },
    {
      title: 'Task Manager App',
      tech: 'Angular, Firebase',
      description: 'A productivity app to manage daily tasks and goals.',
      link: 'https://github.com/yourrepo',
      image: 'https://i.imgur.com/yourimage2.png'
    }
  ];

  stats = [
    { label: 'Projects Completed', value: 15, icon: 'check_circle' },
    { label: 'GitHub Stars', value: 1200, icon: 'star' },
    { label: 'Contributions', value: 300, icon: 'code' },
    { label: 'Followers', value: 500, icon: 'people' }
  ]

  achievements = [
    { title: 'Top 1% in LeetCode', detail: 'Solved 500+ problems and ranked globally.' },
    { title: 'Google Developer Certificate', detail: 'Completed Advanced Web Development training.' },
    { title: 'Hackathon Winner', detail: 'Won 1st place at DevBytes 2023 Hackathon.' }
  ];
}
