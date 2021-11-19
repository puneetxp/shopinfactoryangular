import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
@Component({
  selector: 'home.component-dialog',
  templateUrl: 'home.component-dialog.html',
})
export class DialogElementsExampleDialog { }
