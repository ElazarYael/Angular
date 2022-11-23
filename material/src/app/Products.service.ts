import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService  {

  
  
  constructor(private http: HttpClient, private routeNav: Router) {
    

  }
  items = [
    {
      "type": "Overnight",
      "price": 25.99
    },
    {
      "type": "2-Day",
      "price": 9.99
    },
    {
      "type": "Postal",
      "price": 2.99
    }
  ]

  addToProduct(product) {
    this.items.push(product);
  }


  getItems() {
    return  this.items;
    
  }
  testObserver(): Observable<any>  {
    return this.http.get<any>('https://services.odata.org/OData/OData.svc/Products?$format=json');

  }
  getItemById(id): Observable<any> {
  

    return this.http.get<any>('https://services.odata.org/OData/OData.svc/Products('+id+')?$format=json');

  }

  
  

  clearProduct() {
    this.items = [];
    return this.items;
  }
  

  //CAN_ACTIVE_CHILD

  ////canActivateChild(
  ////  route: ActivatedRouteSnapshot,
  ////  state: RouterStateSnapshot
  ////): Observable<boolean> {
  ////  return this.permissions.canActivate(this.currentUser, route.params.id);
  ////}

}
