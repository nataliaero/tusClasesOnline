import { Component } from '@angular/core';
import { MESSAGES } from '../../messages';

@Component({
  selector: 'app-footer',
  template: `
    <div class="copyright">{{ msg.copyright }}</div>
    <div class="footer-items">
      <p>{{ msg.termsOfService }}</p>
      <p>{{ msg.privacyPolicy }}</p>
      <p>{{ msg.contact }}</p>
    </div>
  `,
  styleUrls: ['./app-footer.component.scss'],
})
export class FooterComponent {
  msg = {
    copyright: MESSAGES['footer.copyright'],
    termsOfService: MESSAGES['footer.termsOfService'],
    privacyPolicy: MESSAGES['footer.privacyPolicy'],
    contact: MESSAGES['footer.contact'],
  };
}
