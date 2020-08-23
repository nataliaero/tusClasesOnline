import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../services';

@Component({
  selector: 'app-root-component',
  template: ``,
})
export class RootComponent implements OnInit {
  constructor(private navigationService: NavigationService, private router: Router) {}

  ngOnInit() {
    this.navigationService.goToHome();
  }
}
