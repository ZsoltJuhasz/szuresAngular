import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {

  position !: number;
  employees = [
  {
    id: 1,
    name: "Perge Béla",
    positionId: 1
  },
  {
    id: 2,
    name: "Pilis Géza",
    positionId: 1
  },
  {
    id: 3,
    name: "Rendes Árpád",
    positionId: 2
  },
  {
    id: 4,
    name: "Gál Ernő",
    positionId: 2
  },
  {
    id: 5,
    name: "Arany Imre",
    positionId: 3
  },
  {
    id: 6,
    name: "Ezüst Pál",
    positionId: 2
  },
  {
    id: 7,
    name: "Eris Katalin",
    positionId: 3
  },
  {
    id: 8,
    name: "Tenkes Károly",
    positionId: 1
  },
  {
    id: 9,
    name: "Ernyős Bálint",
    positionId: 3
  },
  {
    id: 10,
    name: "Csárdás Ödön",
    positionId: 2
  },
  {
    id: 11,
    name: "Csongor Tünde",
    positionId: 3
  },
  {
    id: 12,
    name: "Előnyös Richárd",
    positionId: 1
  }

];

  constructor() {}

  ngOnInit(): void {}
}
