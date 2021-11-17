import { Component, Input } from "@angular/core";
import { Book } from "../../models";

@Component({
    selector: 'app-book-list',
    styleUrls: ['./books-list.component.css'],
    templateUrl: './books-list.component.html',
})
export class BookListComponent {
    @Input() books: Book[] | null = null;
    

    displayedColumns: string[] = ['id', 'title', 'description', 'pageCount','publishDate','deleteAction'];
}