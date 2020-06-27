import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-artykuly',
  templateUrl: './artykuly.component.html',
  styleUrls: ['./artykuly.component.css']
})
export class ArtykulyComponent implements OnInit {

  title = 'Dostępne artykuły:';
  filtrListy = '';
  artykuly: any[] = [
    {
      number: '1',
      name: 'Grabie',
      price: '32 zł',
      vat: '23%',
      amount: '56',
    },
    {
      number: '2',
      name: 'Łopata Fiskars',
      price: '60 zł',
      vat: '23%',
      amount: '43',
    },
    {
      number: '3',
      name: 'Kosiarka',
      price: '500 zł',
      vat: '23%',
      amount: '4',
    },
    {
      number: '4',
      name: 'Doniczka',
      price: '5 zł',
      vat: '23%',
      amount: '666',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
