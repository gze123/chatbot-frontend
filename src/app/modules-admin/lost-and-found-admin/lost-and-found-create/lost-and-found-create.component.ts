import {Component, Input, OnInit} from '@angular/core';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LostAndFoundService} from '../../../services/lost-and-found-service.service';


@Component({
  selector: 'app-lost-and-found-create',
  templateUrl: './lost-and-found-create.component.html',
  styleUrls: ['./lost-and-found-create.component.css']
})
export class LostAndFoundCreateComponent implements OnInit {

  @Input()
  lostAndFoundType: string;
  pageLoading = false;
  imageInputExtra: string;
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
    this.lostAndFoundCreateForm.patchValue({image: this.fileList});
    const formData = new FormData();
    for (const i in this.lostAndFoundCreateForm.controls) {
      this.lostAndFoundCreateForm.controls[i].markAsDirty();
      this.lostAndFoundCreateForm.controls[i].updateValueAndValidity();
    }
    formData.append('item', this.lostAndFoundCreateForm.controls['item'].value);
    formData.append('location', this.lostAndFoundCreateForm.controls['location'].value);
    formData.append('description', this.lostAndFoundCreateForm.controls['description'].value);
    formData.append('contact', this.lostAndFoundCreateForm.controls['contact'].value);
    formData.append('type', this.lostAndFoundType);
    this.fileList.forEach((file: any) => {
      formData.append('image', file);
    });
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
      description: [null],
      location: [null, [Validators.required]],
      contact: [null],
      image: [null]
    });
    if (this.lostAndFoundType === 'lost') {
      this.lostAndFoundCreateForm.get('description').setValidators(Validators.required);
      this.lostAndFoundCreateForm.get('contact').setValidators(Validators.required);
      this.imageInputExtra = 'Image is not necessary';
    } else {
      this.imageInputExtra = '';
    }
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.lostAndFoundCreateForm.patchValue({
      image: file
    });
    this.lostAndFoundCreateForm.get('image').updateValueAndValidity();
  }

  beforeUploadFile = (file: UploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  }

}
