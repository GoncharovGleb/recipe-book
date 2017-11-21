import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding
} from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {

  @HostBinding('class.open') isOpened = false;

  constructor(element: ElementRef, renderer: Renderer2){
  }

  ngOnInit() {
  }

  @HostListener('click') dropDownClick(){
    console.log('Clicked');
    this.isOpened = !this.isOpened;
  }
}
