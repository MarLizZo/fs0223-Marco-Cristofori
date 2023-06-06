import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HeroReactive } from 'src/app/Models/hero-reactive';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent {
  superhero!: HeroReactive;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      identify: this.fb.group({
        name: this.fb.control(null, [Validators.required]),
        alterego: this.fb.control(null, [Validators.required]),
      }),
      // powers: this.fb.array([]),
      enemy: this.fb.control(null),
      planet: this.fb.control(null, [Validators.required, Validators.min(5)]),
      // weaknesses: this.fb.array([]),
    });
    this.form.statusChanges.subscribe((s) => console.log(s));
  }

  addField(name: string) {
    (this.form.get(name) as FormArray).push(new FormControl(null));
  }

  getFields(name: string) {
    return (this.form.get(name) as FormArray).controls;
  }

  isValid(name: string, subGroup?: string) {
    return subGroup
      ? this.form.get(`${subGroup}.${name}`)?.invalid
      : this.form.get(name)?.invalid;
  }

  isTouched(name: string, subGroup?: string) {
    return subGroup
      ? this.form.get(`${subGroup}.${name}`)?.touched
      : this.form.get(name)?.touched;
  }
}
