import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pageTitle: string = 'Slip-Stream';

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.router.navigate(['/welcome']);
  }

}
