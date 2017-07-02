import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appToggleDropdown]'
})
export class ToggleDropdownDirective {
  @HostBinding('class.open') isOpen = false;
  
  constructor() { }
  
  @HostListener('click') toggleDropdown(eventData: Event){
      this.isOpen = !this.isOpen;
  }
}
