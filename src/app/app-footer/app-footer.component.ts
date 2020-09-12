import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer">
      <div class="copyright">© TusClasesOnline</div>
      <div class="footer-items">
        <p>Términos de servicio</p>
        <p>Poliítica de privicidad</p>
        <p>Contacta</p>
      </div>
    </div>
  `,
  styleUrls: ['./app-footer.component.scss'],
})
export class FooterComponent {}
