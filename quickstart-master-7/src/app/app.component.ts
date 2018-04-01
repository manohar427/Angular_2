import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  
               Name:<input type='text' [(ngModel)]='name'>
             <br/><br/>
             You entered {{name}}
            `
  
})
export class AppComponent  
{ 
        name:string = "Arjun";
}