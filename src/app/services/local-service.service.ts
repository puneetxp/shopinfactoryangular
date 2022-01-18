import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {

  constructor() {

   }

   setValue(key:string,value:string){
    window.localStorage.setItem(key,value);
   }
   getValue(key:string) :any{
    window.localStorage.getItem(key)
   }
}
