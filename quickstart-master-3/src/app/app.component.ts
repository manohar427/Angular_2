import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title ? 'AAA '+title :'No Title'}} and {{getTitle()}}
      <input type='text' value='{{title}}'><br/>
      <button [disabled]=buttonDisabled>OK</button>
  <br/>Image1:<img src='{{imageLocation}}'/>
  <br/>Image2:<img [src]='imageLocation'/>
  <br/>Image3:<img bind-src='imageLocation'/>
   <my-employee></my-employee>
      `
})
export class AppComponent  
{ 
        title = 'Employee Details'; 
        imageLocation = "https://www.ag-grid.com/images/angular2.png";
        buttonDisabled = false;
        getTitle(){
          return this.title;
        }
}