import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-can-active',
  templateUrl: './can-active.component.html',
  styleUrls: ['./can-active.component.css']
})
export class CanActiveComponent implements OnInit {
  public title: string = "can Active work !!!!!!!!!!!!!!! with pipe";
  public date: Date = new Date();
  public str: string = "HIIII";
  constructor() {
    
  }

  ngOnInit() {
    
    
  }

}
