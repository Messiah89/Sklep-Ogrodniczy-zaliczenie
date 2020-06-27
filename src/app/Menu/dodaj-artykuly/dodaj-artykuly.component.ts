import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArtykulyComponent } from './Menu/artykuly/artykuly.component';


@Component({
  selector: 'app-dodaj-artykuly',
  templateUrl: './dodaj-artykuly.component.html',
  styleUrls: ['./dodaj-artykuly.component.css']
})
export class DodajArtykulyComponent implements OnInit {

  constructor() {
  }
  @ViewChild('f', {static: false}) artykulForm: NgForm;

  onSubmit(form: NgForm){
    console.log('on submit', this.artykuly);
  }

  onClear() {
    this.artykulForm.reset();
  }
  ngOnInit(): void {
  }
}
