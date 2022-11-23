import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../Products.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { error } from 'util';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy{

  constructor(private route: ActivatedRoute, private routeNav: Router, private serviece: ProductsService) { }
  public sId: string = "";
  public sTab: string = "";
  public sTest: string = '';
  public item: object = null;
  public sError: string = '';
  public Subscription: Subscription;
  ngOnInit() {
    debugger;
   //this is anothe option to get params in url
    //this.sId = this.route.snapshot.params.id;
    //this.sTab = this.route.snapshot.queryParamMap.get("tab");

    this.route.paramMap.subscribe(params => {
      this.sId = params.get("id");
    });
    this.Subscription = this.serviece.getItemById(this.sId).subscribe(
      data => {
        console.log('success', data)
        this.item = data;
      },
      error => {
        console.log('oops', error.statusText)
        this.sError = error.statusText.toUpperCase();
        
      }
     
        
      
    );
    debugger;

    this.route.queryParams.subscribe(query => {
      this.sTab = query.tab;
    });
   
  }
  onBack() {
    this.routeNav.navigate(['table']);

  }
  onBackHomePage() {
    this.routeNav.navigate(['']);
  }
 



  
  ngOnDestroy(): void {

    if (this.Subscription !== undefined) {
      this.Subscription.unsubscribe();
    }
  }

}
