import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookEditForm: FormGroup;
  bookId = '';
  book = {};
  isbn: string = '';
  title: string = '';
  description: string = '';
  author: string = '';
  publisher: string = '';
  published_year: string = '';
  location: any;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.bookId = this.route.snapshot.params['id'];
    this.getBookDetails(this.route.snapshot.params['id']);
    this.bookEditForm = this.formBuilder.group({
      'isbn': [null, Validators.required],
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'author': [null, Validators.required],
      'publisher': [null, Validators.required],
      'published_year': [null, Validators.required]
    });
  }

  getBookDetails(id){
    this.api.getBook(id).subscribe(data =>{console.log(data);
    this.book = data;
    });
  }

  onFormSubmit(form: NgForm){
    this.api.updateBook(this.bookId, form)
      .subscribe(res => {
        this.router.navigate(['/book-details', this.bookId]);
      }, (err) => {
        console.log(err);
      });
  }

  getDate() {
    return Date.now().toLocaleString();
  }

  cancel() {
    this.location.back();
  }

}
