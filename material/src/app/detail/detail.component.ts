import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../Products.service';
import { AuthentServiceService } from '../authent-service.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  title = 'material';
  constructor(private router: Router, private service: AuthentServiceService) { }

  ngOnInit() {
  }
   name = {first: 'Nancy', last: 'Drew'};

  onSubmit(f: NgForm) {
    debugger;
    console.log(f.value);  // {name: {first: 'Nancy', last: 'Drew'}, email: ''}
    console.log(f.valid);  // true
  }

  setValue() {
    this.name = {first: 'Bess', last: 'Marvin'};
  }
  onForm() {
    this.service.login(null, null);
  }
  canActive() {
    debugger;
    this.service.login(null, null).subscribe(obj => {
      if (obj) {
        this.router.navigate(['canActive']);
      }
      else {
        this.router.navigate(['table']);

      }
    });
    //this.router.navigate(['canActive']);
   
    
    
  }

}
