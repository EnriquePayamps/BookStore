import { NgModule } from "@angular/core";
import { BooksRoutingModule } from "./books-routing.module";
import { containers } from "./container";
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { components } from "./component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { BookStoreService } from "./book-store.service";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule, 
        BooksRoutingModule, 
        MatButtonModule, 
        MatTableModule, 
        HttpClientModule, 
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule

    ],
    declarations: [...containers, ...components],
    providers: [BookStoreService]
})
export class BooksStoreModule { }