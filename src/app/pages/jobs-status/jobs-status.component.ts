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
      'HTML', 'CSS', 'REST APIs', 'GraphQL', 'MongoDB', 'MySQL'
    ],
    recruiterNotes: 'Strong candidate with good communication skills.',
    status: 'active',
    from: '2024-07-12',
    to: 'Present',
    timestamp: 1672531199000,
    attempts: 3
  };

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
