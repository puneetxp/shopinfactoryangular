import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    DialogElementsExampleDialog;
  }

}
@Component({
  selector: 'home.component-dialog',
  templateUrl: 'home.component-dialog.html',
})
export class DialogElementsExampleDialog { }
