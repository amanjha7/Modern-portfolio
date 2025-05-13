import { Component } from '@angular/core';

interface Education {
  institution: string;
  board?: string;
  percentage?: number;
  cpi?: number;
  duration: string;
  logoUrl: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institution: 'Vidya Devi Jindal School',
      board: 'CBSE',
      percentage: 85.8,
      duration: '2018–2019',
      logoUrl: 'assets/logos/vdjs.png'
    },
    {
      institution: 'Vidya Devi Jindal School',
      board: 'CBSE',
      percentage: 78.8,
      duration: '2020–2021',
      logoUrl: 'assets/logos/vdjs.png'
    },
    {
      institution: 'GLA University',
      cpi: 8.27,
      duration: '2021–2025',
      logoUrl: 'assets/logos/gla.png'
    }
  ];
}
