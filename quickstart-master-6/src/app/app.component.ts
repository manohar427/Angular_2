import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  // `<button  (click)='onClick()'>Submit</button>
    //<br/>
    //<br/>
    //<button  on-click='onClick()'>Submit</button>
   //`
   `<my-employee></my-employee>`
})
export class AppComponent  
{ 
        onClick():void {
        console.log('Button Clicked....');
        }
}