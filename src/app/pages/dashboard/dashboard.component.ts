import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('stagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('600ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  // Updated with real images and proper icons
  featuredProjects = [
    {
      title: 'Document Fixer',
      tech: 'Angular, Node.js',
      description: 'Advanced document processing application supporting multiple format conversions',
      link: 'https://document-frontend-3luh.vercel.app',
      image: 'https://i.imgur.com/3Q2Z1Zl.png'
    },
    {
      title: 'Task Manager Pro',
      tech: 'Angular, Firebase',
      description: 'Collaborative task management system with real-time updates',
      link: '#',
      image: 'https://i.imgur.com/BE6Sykj.png'
    }
  ];

  stats = [
    { label: 'Experience', value: '3+ Years', icon: 'work_history' },
    { label: 'Projects', value: '15+', icon: 'code' },
    { label: 'Certifications', value: '5', icon: 'verified' },
    { label: 'Satisfaction', value: '100%', icon: 'sentiment_very_satisfied' }
  ];

  achievements = [
    { 
      title: 'LeetCode Top 1%', 
      detail: 'Solved 500+ problems in algorithms and data structures',
      icon: 'speed'
    },
    { 
      title: 'Google Certified', 
      detail: 'Mobile Web Specialist certification',
      icon: 'verified_user'
    },
    { 
      title: 'Hackathon Winner', 
      detail: '1st place in national coding competition',
      icon: 'emoji_events'
    }
  ];

  // Scroll position for parallax effect
  scrollPosition = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrollPosition = window.pageYOffset;
  }

  ngOnInit() {
    this.initIntersectionObserver();
  }

  private initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
  }

  // Parallax effect calculation
  get parallaxTransform() {
    const yPos = -this.scrollPosition * 0.3;
    return `translate3d(0, ${yPos}px, 0)`;
  }
}