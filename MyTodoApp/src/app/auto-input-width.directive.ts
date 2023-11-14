import { Directive, ElementRef, HostListener, Input, inject, numberAttribute } from '@angular/core';

@Directive({
  selector: 'input[type="text"][appAutoInputWidth]',
  standalone: true
})
export class AutoInputWidthDirective {
  @Input({ required: true, transform: numberAttribute })
  appAutoInputWidth!: number;
  inputElement: HTMLInputElement = inject(ElementRef).nativeElement;

  @HostListener('focus')
  onFocus() {
    this.width('add');
  }

  @HostListener('blur')
  onBlur() {
    this.width('remove');
  }

  width(type: 'add' | 'remove') {
    const width = this.inputElement.offsetWidth + (type === 'add' ? + this.appAutoInputWidth : - this.appAutoInputWidth);
    this.inputElement.style.width = `${width}px`;
  }
}
