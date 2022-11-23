
import { PipeTransform, Pipe } from '@angular/core';
import { Products } from '../model/Products';




@Pipe({ name: 'PipeTrasfo' })

export class PipeTrasfo implements PipeTransform {
  public aProductsIsFind = [];


  transform(sValue: string, date: Date, str: string): string {
    alert(str);
    if (!!sValue) {
      return sValue.toUpperCase() + date.toDateString();
    }
    return '';
   
    
  }
}





