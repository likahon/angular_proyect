import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedOnHover]'
})
export class RedOnHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Agregar la transición y el cursor pointer al elemento
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.5s, background-color 0.5s');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('rgb(255, 0, 0)');
    this.zoomElement(1.1); // Cambia 1.1 a la escala de zoom deseada
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor("");
    this.zoomElement(1); // Restablece la escala original
  }

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  private zoomElement(scale: number) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${scale})`);
  }
}
