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
  experienceData: Experience[] = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Software Engineer',
      yearsOfExperience: 5,
      skills: ['JavaScript', 'Angular', 'Node.js'],
      recruiterNotes: 'Strong candidate with good communication skills.',
      status: 'active',
      from: '2020-01-01',
      to: '2023-01-01',
      timestamp: 1672531199000,
      attempts: 3
    }
  ];

  displayedColumns: string[] = ['id', 'name', 'role', 'status', 'skills', 'fromTo', 'timestamp', 'attempts'];

  constructor(private datePipe: DatePipe) {}

  formatTimestamp(timestamp: number): string {
    return this.datePipe.transform(timestamp, 'medium') || '';
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'active':
        return 'status-active';
      case 'inactive':
        return 'status-inactive';
      case 'pending':
        return 'status-pending';
      default:
        return '';
    }
  }
}
