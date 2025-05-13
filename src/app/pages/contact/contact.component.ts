// contact.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder,private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
    this.matIconRegistry.addSvgIcon(
    'github',
    this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
    'linkedin',
    this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    );
        this.matIconRegistry.addSvgIcon(
    'leetcode',
    this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/leetcode.svg')
    );
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Handle form submission
      console.log('Form submitted:', this.contactForm.value);
      // Add your API call or email service here
      // this.contactForm.reset();
      const message = this.contactForm.value.message;
      const name = this.contactForm.value.name;
      const email = this.contactForm.value.email;
      
    }
  }
}