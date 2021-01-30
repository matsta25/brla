import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  personName: string;

  constructor() {
    console.log('constructor()');
  }

  ngOnInit(): void {
    // inicjalizacja tutaj
    this.personName = 'Mateusz stanczak';
    console.log('ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
  }
}
