import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer implements OnInit {
  year: number = new Date().getFullYear();
  constructor() {}
  ngOnInit(): void {}
}
