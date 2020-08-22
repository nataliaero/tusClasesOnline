import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootNavigationService } from 'src/navigation';

@Component({
  selector: 'app-root-component',
  template: ``,
})
export class RootComponent implements OnInit {
  constructor(private rootNavigationService: RootNavigationService, private router: Router) {}

  ngOnInit() {
    this.rootNavigationService.goToHome();
  }
}
