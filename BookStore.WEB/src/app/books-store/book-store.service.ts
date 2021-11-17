import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "./models";

@Injectable()
export class BookStoreService {
    baseUrl = "https://localhost:44301/api/book";

    constructor(private http: HttpClient) {}

    getBooks(): Observable<Book[]>{
        return this.http.get<Book[]>(this.baseUrl);
    }

    getBookById(id: number): Observable<Book> {
        return this.http.get<Book>(this.baseUrl+'/'+id);
    }

    createBook(book: Book) {
        return this.http.post<Book>(this.baseUrl, book);
    }

    updateBook(id: number, book: any) {
        return this.http.put<Book>(this.baseUrl+'/'+id, book);

    }

    deleteBook(id: number): Observable<Object> {
        return this.http.delete(this.baseUrl+'/'+id);
    }
}