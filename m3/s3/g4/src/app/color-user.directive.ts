import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[colorText]',
})
export class ColorUserDirective {
  @Input() color!: string;

  constructor(private ref: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.ref.nativeElement.style.color = this.color || '';
  }
}
