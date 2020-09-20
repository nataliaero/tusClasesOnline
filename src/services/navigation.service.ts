import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  openNotFound(): void {
    this.router.navigate(['/', 404]);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToSearchTutor(): void {
    console.log('navigate');
    this.router.navigate(['/tutor/search-tutor']);
  }

  goToRoot(): void {
    this.router.navigate(['/']);
  }
}
