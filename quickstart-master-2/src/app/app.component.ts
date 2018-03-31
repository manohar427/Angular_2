import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}
  //    </h1>`
  template: `<h1>
                  Employee Details                  
             </h1><my-employee></my-employee>
            `
})
export class AppComponent  { name = 'Employee Details'; }
