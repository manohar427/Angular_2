import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
   `<button style='color:red' [style.font-weight]="isBold ? 'bold':'normal'">Submit</button> 
    <br/><br/>
    <button style='color:red' [style.font-size.px]="fontSize">Submit</button> 
    <br/><br/>
    <button style='color:red' [ngStyle]="addStyles()">Submit</button> 
  `
})
export class AppComponent  
{ 
        isBold:boolean = true;
        fontSize:number = 30;
        isItalic:boolean = false;

        addStyles(){

          let styles = {
               'font-size.px':this.fontSize,
               'font-style':this.isItalic ? 'italic':'normal',
               'font-weight':this.isBold ? 'bold':'normal'
          }
          return styles;
        }
}