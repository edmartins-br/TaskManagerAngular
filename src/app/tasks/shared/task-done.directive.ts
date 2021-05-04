import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[taskDone]'
})

export class TaskDoneDirective {

  @Input() taskDone: boolean; // fornece a informação que pode ser passada através do HTML 
  
  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.taskDone) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
