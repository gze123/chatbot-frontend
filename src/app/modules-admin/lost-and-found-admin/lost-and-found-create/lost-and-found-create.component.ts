import {Component, OnInit} from '@angular/core';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LostAndFoundService} from '../../../services/lost-and-found-service.service';


@Component({
  selector: 'app-lost-and-found-create',
  templateUrl: './lost-and-found-create.component.html',
  styleUrls: ['./lost-and-found-create.component.css']
})
export class LostAndFoundCreateComponent implements OnInit {

  pageLoading = false;
  lostAndFoundCreateForm!: FormGroup;
  fileList: UploadFile[] = [];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private lostAndFoundService: LostAndFoundService
  ) {
  }


  submitForm(): void {
    this.pageLoading = true;
    const formData = new FormData();
    for (const i in this.lostAndFoundCreateForm.controls) {
      this.lostAndFoundCreateForm.controls[i].markAsDirty();
      this.lostAndFoundCreateForm.controls[i].updateValueAndValidity();
    }
    formData.append('item', this.lostAndFoundCreateForm.controls['item'].value);
    formData.append('location', this.lostAndFoundCreateForm.controls['location'].value);
    formData.append('image', this.lostAndFoundCreateForm.controls['image'].value);

    formData.forEach(x => console.log(x));
    this.lostAndFoundService.addLostAndFound(formData).subscribe(res => {
      this.pageLoading = false;
      location.reload();
    }, error => {
      this.pageLoading = false;
    });

  }

  ngOnInit(): void {
    this.lostAndFoundCreateForm = this.fb.group({
      item: [null, [Validators.required]],
      location: [null, [Validators.required]],
      image: [null, [Validators.required]]
    });
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.lostAndFoundCreateForm.patchValue({
      image: file
    });
    this.lostAndFoundCreateForm.get('image').updateValueAndValidity();
  }
}
