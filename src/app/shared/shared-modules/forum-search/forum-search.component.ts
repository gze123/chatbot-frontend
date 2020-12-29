import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ForumService} from '../../../services/forum-service.service';

@Component({
  selector: 'app-forum-search',
  templateUrl: './forum-search.component.html',
  styleUrls: ['./forum-search.component.css']
})
export class ForumSearchComponent implements OnInit {

  searchForumForm!: FormGroup;
  @Output()
  searchListener = new EventEmitter<any>();
  @Output()
  resetListener = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.searchForumForm = this.fb.group({
      keyword: [null, [Validators.required]],
    });
  }

  submitForm() {
    for (const i in this.searchForumForm.controls) {
      this.searchForumForm.controls[i].markAsDirty();
      this.searchForumForm.controls[i].updateValueAndValidity();
    }
    let forumCreateModel = {
      keyword: this.searchForumForm.controls.keyword.value
    };
    this.searchListener.emit(forumCreateModel);
  }

  resetForm() {
    this.searchForumForm.reset();
    this.resetListener.emit();
  }
}
