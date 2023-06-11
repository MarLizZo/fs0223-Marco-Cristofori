import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  standalone: true,
  templateUrl: './alert.component.html',
  imports: [NgbAlertModule],
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() messageTitle!: string;
  @Input() errorInfo!: string;

  @Output() onCloseAlert = new EventEmitter();

  closeAlert() {
    this.onCloseAlert.emit();
  }
}
