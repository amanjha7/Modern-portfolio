import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Experience {
  id: number;
  name: string;
  role: string;
  yearsOfExperience: number;
  skills: string[];
  recruiterNotes?: string;
  status: 'active' | 'inactive' | 'pending';
  from: string;
  to: string;
  timestamp: number;
  attempts: number;
}

@Component({
  selector: 'app-jobs-status',
  templateUrl: './jobs-status.component.html',
  styleUrls: ['./jobs-status.component.scss'],
  providers: [DatePipe]
})
export class JobsStatusComponent {
  experience: Experience = {
    id: 1,
    name: 'Profunnel Technologies Private Limited',
    role: 'Product Engineer',
    yearsOfExperience: 1,
    skills: [
      'JavaScript', 'Angular', 'Node.js', 'TypeScript',
      'HTML', 'CSS', 'REST APIs', 'GraphQL', 'MongoDB', 'MySQL',
      'PHP', 'Laravel', 'Git', 'Docker', 'Redis', 'Jira',
      'Agile', 'Scrum', 'CI/CD', 'GitLab CI', 'Apache', 'Nginx',
      'OAuth', 'JWT', 'AJAX', 'jQuery', 'Blade', 'Java',
      'Spring Boot', 'Microservices', 'Kubernetes', 'AWS', 'Azure','PostgreSQL', 'Redis', 'Horizon',
      'Unit Testing', 'End-to-End Testing', 'Code Reviews', 'Agile Practices',
      'Daily Standups', 'Team Collaboration', 'User Interface Design','Software Development',
      'Backend Development', 'Frontend Development', 'Database Management',
      'API Development', 'Asynchronous Processing', 'Performance Optimization',
      'Debugging', 'Troubleshooting', 'Technical Documentation',
    ],
    recruiterNotes: 'Strong candidate with good communication skills.',
    status: 'active',
    from: '2024-07-12',
    to: 'Present',
    timestamp: 1720758658000,
    attempts: 3
  };

  experienceHighlights: string[] = [
  'Built OAuth/REST integrations for DocuSign, GitHub, GitLab, etc.',
  'Refactored backend to reduce latency by 40% and doubled concurrency.',
  'Fixed 100+ prod bugs, reduced memory use by 25%, APIs faster by 15%.',
  'Automated 80% of manual release processes using GitLab CI & scripts.',
  'Customized Salesforce/Dynamics to boost lead conversion speed.',
  'Redesigned backend API architecture & optimized DB queries.',
  'Developed dynamic UIs using AJAX, jQuery, Blade, and JS.',
  'Deployed Laravel apps with Git/SSH on Apache/Nginx.',
  'Worked with queues, jobs, Redis, Horizon for async processing.',
  'Followed Agile practices with Jira + daily standups.'
];
  experienceDetails: string[] = [
    'Worked on a team of 5 to develop a web application using Angular and Node.js.',
    'Collaborated with designers to create user-friendly interfaces.',
    'Participated in code reviews and provided feedback to team members.',
    'Worked with REST APIs and GraphQL to integrate with backend services.',
    'Implemented unit tests and end-to-end tests to ensure code quality.'
  ];

  constructor(private datePipe: DatePipe) {}

  formatTimestamp(timestamp: number): string {
    return this.datePipe.transform(timestamp, 'medium') || '';
  }

  getDuration(from: string, to: string): string {
    const fromDate = new Date(from);
    const toDate = to.toLowerCase() === 'present' ? new Date() : new Date(to);

    const totalMonths =
      (toDate.getFullYear() - fromDate.getFullYear()) * 12 +
      (toDate.getMonth() - fromDate.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const yearStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

    return [yearStr, monthStr].filter(Boolean).join(', ');
  }
}
