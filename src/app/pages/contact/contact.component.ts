// contact.component.ts
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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
          style({ opacity: 0, transform: 'translateX(-20px)' }),
          stagger('100ms', [
            animate('500ms ease-out', 
              style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('800ms ease-out', 
          style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ContactComponent implements AfterViewInit {
  contactForm: FormGroup;
  sending = false;
  formSubmitted = false;

  socialLinks = [
    { icon: 'linkedin', link: 'https://linkedin.com/in/aman-jha-07334a254', label: 'LinkedIn' },
    { icon: 'github', link: 'https://github.com/amanjha7', label: 'GitHub' },
    { icon: 'leetcode', link: 'https://leetcode.com/u/Aman_jha_/', label: 'LeetCode' }
  ];

  contactItems = [
    { icon: 'email', label: 'Email', value: 'amanjhavdjs12tha@gmail.com', type: 'email' },
    { icon: 'phone', label: 'Phone', value: '+918941951465', type: 'tel' },
    { icon: 'location_on', label: 'Location', value: 'Nand Gaon Road, Kosi Kalan (Mathura) 281403, India' }
  ];

  constructor(
    private fb: FormBuilder,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(20)]],
      recaptcha: ['', Validators.required]
    });

    // Register custom SVG icons
    ['github', 'linkedin', 'leetcode'].forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`)
      );
    });
  }

async onSubmit() {
  this.formSubmitted = true;

  if (this.contactForm.valid && !this.sending) {
    this.sending = true;
    try {
      const response = await this.http.post(
        'https://portfolio-services-backend.onrender.com/api/send-email',
        this.contactForm.value
      ).toPromise();

      console.log('Email sent successfully:', response);
      this.contactForm.reset();
      this.formSubmitted = false; // reset flag
      this.showNotification('Message sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      this.showNotification('Error sending message. Please try again.', true);
    } finally {
      this.sending = false;
    }
  }
}


  @HostListener('window:scroll', [])
  onScroll(): void {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight - 100;

      if (isVisible) {
        el.classList.add('visible');
      }
    });
  }

  ngAfterViewInit(): void {
  this.onScroll(); // Run once initially in case already in view
}

  onCaptchaResolved(captchaResponse: string) {
    this.contactForm.patchValue({ recaptcha: captchaResponse });
  }

  private showNotification(message: string, isError = false) {
    // Implement snackbar or toast notification here
    alert(message); // Replace with proper notification system
  }
}