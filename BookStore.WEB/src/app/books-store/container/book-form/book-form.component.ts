import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { take } from "rxjs";
import { BookStoreService } from "../../book-store.service";
import { Book } from "../../models";
@Component({
    selector: 'form-field--example',
    templateUrl: 'book-form.component.html',
    styleUrls: ['book-form.component.css'],
    
  })
  
export class BookFormComponent implements  OnInit {
    isNew: boolean = false;
    bookId: number | null = null; 
    bookFormGroup: FormGroup;
    loading = false;

    constructor(router: ActivatedRoute, fb: FormBuilder, private service: BookStoreService) {
        const id = router.snapshot.params["id"];
        this.isNew = isNaN(id);    
        this.bookId = !this.isNew ? +id : null; 

        this.bookFormGroup = fb.group({
            title: ['', Validators.required],
            description: [''],
            pageCount: ['', Validators.required],
            excerpt: [],
            publishDate: ['', Validators.required] 
        });
    }

    ngOnInit(): void {
        if(!this.isNew){
            this.loading = true;
            this.service
                .getBookById(this.bookId!)
                .pipe(take(1)).subscribe(book=> {this.bookFormGroup.patchValue(book); this.loading = false;});
        }
    }

    async saveBook(){
        var book = this.bookFormGroup.value as Book;
        try {
            if(this.isNew)
                await this.service.createBook(book).toPromise();
            else
                await this.service.updateBook(this.bookId!, book).toPromise();
        }
        catch (err) {
            
            alert("Ha ocurrido un error al contactar los servidores");
        }
    }
}
