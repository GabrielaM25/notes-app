import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
  
  @Input()
  defaultColor!: string;

  constructor( private elementRef: ElementRef,
    private renderer: Renderer2) {
      this.setBgColor('white')}

      ngOnInit(){
      if(this.defaultColor){
        this.setBgColor(this.defaultColor)
      }else{

        this.setBgColor('white')
      }
    }

      setBgColor(color: string){
        this.renderer.setStyle(
    this.elementRef.nativeElement,'backgroundColor',color)
   }
   @HostListener('mouseenter')
   onMouseEnter(){
     this.setBgColor('yellow')
   }
   @HostListener('mouseleave')
   onMouseLeave(){
     this.setBgColor('white')
   }
    
}
