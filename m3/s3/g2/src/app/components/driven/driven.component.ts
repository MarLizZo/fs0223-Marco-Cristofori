import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from 'src/app/Models/hero';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.scss'],
})
export class DrivenComponent {
  @ViewChild('f', { static: true }) form!: NgForm;
  superhero!: Hero;

  submit(form: NgForm) {
    this.superhero = form.form.value;
    console.log(this.superhero);
    this.form.reset();
  }
}
