import { AfterViewInit, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';


import { ProductsService } from '../Products.service';
import { Subscription, Observer } from 'rxjs';
import { debug } from 'util';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class Table implements AfterViewInit, OnInit, OnDestroy {

  public tab: string = '';
  public sValue: string = "";
  public items = [];
  public itemsProducts = null;
  public aCopy = [];
  public test = [];
  public Subscription: Subscription;
  public bDescending: boolean = true;
  public bDescendingSort: boolean = true;

  constructor(private serviece: ProductsService, private route: Router) {
    debugger;
    this.sValue = "";
    this.tab = "extra";

  }

  ngOnInit() {


    this.sValue = "";
    this.Subscription = this.serviece.testObserver().subscribe(aRrray => {
      this.itemsProducts = aRrray.value;
      this.aCopy = Object.assign(this.itemsProducts);

      setTimeout(function () {



      }, 1000000);




    })





    this.items = this.serviece.getItems();

  }
  ngOnDestroy(): void {

    if (this.Subscription !== undefined) {
      this.Subscription.unsubscribe();
    }
  }

  ngAfterViewInit() {

  }
  btnTestGet() {
    this.Subscription = this.serviece.testObserver().subscribe(
      {
        next(position) {
          debugger;
          console.log('Current Position: ', position.value);
          position.value.splice(9, 3);
          this.itemsProducts = position.value;
        },
        error(msg) {
          console.log('Error Getting Location: ', msg);
        }
      }

    );
  }


  onFocs() {
    debugger;
    if (this.sValue.length > 0) {

      this.itemsProducts = this.itemsProducts.filter(
        arr => arr.Name.toLowerCase().includes(this.sValue.toLowerCase()), 6);
    }
    else {
      this.itemsProducts = this.aCopy;
    }


  }
  goToClick(event, id) {
    debugger;
    if ((!id || !!id) && typeof (id) === "number") {
      this.route.navigate(['/edit', id], { queryParams: { tab: this.tab } });
    }


  }
  onSortByRating() {
    if (this.bDescending) {
      this.bDescending = !this.bDescending;
      this.itemsProducts.sort((aObj, bObj) => (aObj.Rating < bObj.Rating) ? 1 : ((bObj.Rating < aObj.Rating) ? -1 : 0));

    }
    else {
      this.bDescending = !this.bDescending;
      this.itemsProducts.sort((aObj, bObj) => (aObj.Rating > bObj.Rating) ? 1 : ((bObj.Rating > aObj.Rating) ? -1 : 0));

    }
  }
  onSort(event, str: string) {


    if (this.bDescendingSort) {
      this.bDescendingSort = !this.bDescendingSort;
      this.itemsProducts.sort((aObj, bObj) => (aObj[str] < bObj[str]) ? 1 : ((bObj[str] < aObj[str]) ? -1 : 0));

    }
    else {
      this.bDescendingSort = !this.bDescendingSort;
      this.itemsProducts.sort((aObj, bObj) => (aObj[str] > bObj[str]) ? 1 : ((bObj[str] > aObj[str]) ? -1 : 0));

    }
  }
}
