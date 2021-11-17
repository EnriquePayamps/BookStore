import { Component, Input, OnInit } from "@angular/core";
import { BookStoreService } from "../../book-store.service";

@Component({
    template: `<h1>Hello from book list</h1> <button mat-raised-button color="accent" [routerLink]="'./new'"> Registrar Libro</button> 
           
           <app-book-list [books]="books$ | async" ></app-book-list>
         `,
})
export class BooksComponent {
    constructor(private service: BookStoreService){

    }
    
    books$ = this.service.getBooks();
    
}