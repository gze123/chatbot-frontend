import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ForumService} from '../../../../services/forum-service.service';

@Component({
  selector: 'app-forum-create',
  templateUrl: './forum-create.component.html',
  styleUrls: ['./forum-create.component.css']
})
export class ForumCreateComponent implements OnInit {

  createForumForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private forumService: ForumService
  ) {
  }

  ngOnInit(): void {
    this.createForumForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  submitForm() {
    for (const i in this.createForumForm.controls) {
      this.createForumForm.controls[i].markAsDirty();
      this.createForumForm.controls[i].updateValueAndValidity();
    }
    let forumCreateModel = {
      title: this.createForumForm.controls.title.value,
      description: this.createForumForm.controls.description.value
    };
    this.forumService.addForumTitle(forumCreateModel).subscribe(res => {
      location.reload();
    }, error => {

    });
  }
}

