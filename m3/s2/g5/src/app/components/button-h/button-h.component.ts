import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-h',
  templateUrl: './button-h.component.html',
  styleUrls: ['./button-h.component.scss'],
})
export class ButtonHComponent {
  @Input() txt!: string;
  @Input() toHome!: boolean;
}
