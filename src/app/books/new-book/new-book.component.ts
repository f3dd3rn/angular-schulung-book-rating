import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAX_RATING, MIN_RATING } from 'src/app/config';
import { Book } from 'src/app/models/book';
import { BooksStoreService } from 'src/app/services/books-store.service';

@Component({
  selector: 'br-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {
  readonly MIN_RATING: number = MIN_RATING;
  readonly MAX_RATING: number = MAX_RATING;
  bookForm: FormGroup = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
        Validators.pattern(/^[0-9]+$/)
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),
    subtitle: new FormControl('', {
      nonNullable: true
    }),
    rating: new FormControl(MIN_RATING, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(MIN_RATING),
        Validators.max(MAX_RATING)
      ]
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(255)
      ]
    }),
    thumbnails: new FormGroup([
      new FormGroup({
        title: new FormControl(''),
        url: new FormControl('')
      })
    ]),
    price: new FormControl(0.0, {
      nonNullable: true,
      validators: [
        Validators.min(0),
      ]
    })
  });

  constructor(private bookStoreService: BooksStoreService, private router: Router) {}

  onSubmit() {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    const newBook: Book = this.bookForm.getRawValue();
    console.log(newBook);
    
    this.bookStoreService.create(newBook).subscribe({
      next: (createdBook: Book) => {
        console.log('New Book', createdBook);
        this.router.navigate(['/books', createdBook.isbn]);
      },
      error: (error) => {
        console.error('Error', error);
      }
    });
  }
}
