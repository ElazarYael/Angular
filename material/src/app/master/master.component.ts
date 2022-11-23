import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';




declare var $: any;




@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})

 

export class MasterComponent  {
  
  constructor() { }
  ngOnInit() {
  }
  emp = { email: "", passpord: '', checkbox: false };
  onSubmit(f: NgForm) {
    debugger;
    console.log(f.value);  
    console.log(f.valid);
    if (f.valid) {
      this.emp = { email: "", passpord: '', checkbox: false };
      $('data-dismiss').modal().clone();;
      debugger;
    }
    else {

    }

  }
  onOpenDialogLogin() {
    debugger;
    

  }
  
  
}
