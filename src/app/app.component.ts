import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  @ViewChild('number') number!: ElementRef;
  numero:number=0

  ngOnInit(): void {
   
  }



}
