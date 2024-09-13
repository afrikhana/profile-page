import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  localTime: string = '';
  private timerInterval: any;
  form: FormGroup = this.fb.group({
    from_name: '',
    from_email: '', // Ensure valid email
    service: '',
    budget: '',
    message: '',
    check: false 
  });


  constructor(private fb: FormBuilder) {
    // Initialize form with FormBuilder
    
  }

  ngOnInit(): void {
    this.updateTime();
    this.timerInterval = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private updateTime(): void {
    const now = new Date();
    const localTime = new Date(now.getTime() + (now.getTimezoneOffset() + 180) * 60000);
    this.localTime = localTime.toLocaleTimeString('en-GB', { hour12: false });
  }

  isSubmitting = false;

async send() {
  if (this.form.invalid || this.isSubmitting) {
    return; // Prevent sending if form is invalid or already submitting
  }

  this.isSubmitting = true; // Disable the button
  try {
    emailjs.init('5ZB-dEmcJmuVSsJoy');
    const formData = this.form.value;

    let res = await emailjs.send("service_nhvfx4s", "template_7f96wbo", {
      from_name: formData.from_name,
      from_email: formData.from_email,
      service: formData.service,
      budget: formData.budget,
      message: formData.message,
      check: formData.check ? "True" : "False",
    });

    alert('Message has been sent.');
    this.form.reset();
  } catch (error) {
    alert('Failed to send message.');
  } finally {
    this.isSubmitting = false; // Re-enable the button after request completes
  }
}
}
