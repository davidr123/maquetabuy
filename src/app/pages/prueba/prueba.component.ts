import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PruebamodalComponent } from './pruebamodal/pruebamodal.component';
export interface PeriodicElement {
  producto: string;
  descripcion: string;
  cantidad: number;
  precion: string;
  entrega:string;
  accion:string
}


export interface Asignar{
  asignarproducto:string;
}

export interface Totales{
  descripcion:string;
  subtotal:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {producto:'', descripcion: 'Quisque convallis nibh', cantidad: 0, precion: '$1,00', entrega:'', accion:''},
  {producto:'', descripcion: 'Quisque convallis nibh', cantidad: 0, precion: '$1,50', entrega:'', accion:''},

  {producto:'', descripcion: 'Quisque convallis nibh', cantidad: 0, precion: '$3,50', entrega:'', accion:''},


];


const ELEMENT_DATA2: Asignar[] = [
  {asignarproducto:''},



];

const ELEMENT_DATA3: Totales[] = [
   {descripcion:'subtotal',  subtotal:'$6,00'},
   {descripcion:'total',  subtotal:'$6,00'},




];



@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})



export class PruebaComponent implements OnInit {

  toppings = this._formBuilder.group({
    name1: false,
    name2: false,
    name3: false,
  });

  displayedColumns: string[] = ['producto', 'descripcion', 'cantidad', 'precion', 'entrega', 'accion'];
  dataSource = ELEMENT_DATA;


  displayedColumns2: string[] = ['asignarproducto'];
  dataSource2= ELEMENT_DATA2;


  displayedColumns3: string[] = ['subtotal', 'total'];
  dataSource3= ELEMENT_DATA3;


  
  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PruebamodalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
