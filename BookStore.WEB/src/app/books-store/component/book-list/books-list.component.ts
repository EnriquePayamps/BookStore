import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../../models";

@Component({
    selector: 'app-book-list',
    styleUrls: ['./books-list.component.css'],
    templateUrl: './books-list.component.html',
})
export class BookListComponent {
    @Input() books: Book[] | null = null;
    @Output() delete = new EventEmitter<number>();

    displayedColumns: string[] = ['id', 'title', 'description', 'pageCount','publishDate','deleteAction'];

    onDeleteClick(bookId: number) {
        this.delete.emit(bookId);
    }
}