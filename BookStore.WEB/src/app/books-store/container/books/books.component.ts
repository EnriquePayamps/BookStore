import { Component, Input, OnInit } from "@angular/core";
import { BookStoreService } from "../../book-store.service";

@Component({
    template: `
        <h1 style="text-align: center;">Hello from book list</h1> 
        <button mat-raised-button color="accent" [routerLink]="'./new'"> Registrar Libro</button> 
        <app-book-list [books]="books$ | async" (delete)="onDelete($event)"></app-book-list>`,
})
export class BooksComponent {
    constructor(private service: BookStoreService){}
    
    books$ = this.service.getBooks();


    
    async onDelete(bookId: number) {
        if(!confirm("Estas seguro que desea elminiar el libro?")) return;

        try
        {
            await this.service.deleteBook(bookId).toPromise();
            alert('Se elimino con exito');
        }
        catch(err){
            alert('Error');
        }
    }
}