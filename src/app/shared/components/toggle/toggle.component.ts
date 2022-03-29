import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() isCheck: boolean | null = false;
  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleChange(): void {
    this.onChange.emit(!!this.isCheck);
  }
}
