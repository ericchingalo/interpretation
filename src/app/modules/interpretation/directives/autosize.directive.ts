import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutosize]'
})

export class AutosizeDirective {
  @HostListener('input',['$event.target'])
  
  onInput(){
    this.adjust();
  }
  constructor(public element: ElementRef){
  }
  ngAfterContentChecked(): void{
    this.adjust();
  }
  adjust(){
    this.element.nativeElement.style.overflow = 'hidden';
    this.element.nativeElement.style.height = 'auto';
    this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + "px";
  }

}
