import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<button class='colorClass' [class]='classToApply'>Submit</button>
   <br/>
   <br/>
  <button class='colorClass' [class.italicClass]='applyItalicClass' [class.boldClass]='applyItalicClass'>Submit</button>

  <br/>
   <br/>
  <button [ngClass]='addClasses()'>Submit</button>

  `
})
export class AppComponent  
{ 
        classToApply:string = 'italicClass boldClass';
        applyItalicClass:boolean = true;
        applyBoldClass:boolean = true;

        addClasses(){

          let classes = {
              boldClass :this.applyBoldClass,
              italicClass:this.applyItalicClass
          }

          return classes;
        }
}