import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {LostAndFoundService} from '../../../services/lost-and-found-service.service';

@Component({
  selector: 'app-lost-and-found-update',
  templateUrl: './lost-and-found-update.component.html',
  styleUrls: ['./lost-and-found-update.component.css']
})
export class LostAndFoundUpdateComponent implements OnInit {

  @Input()
  data: any;
  isVisible: boolean;
  pageLoading = false;
  lostAndFoundUpdateForm!: FormGroup;
  @Output()
  reloadData = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private lostAndFoundService: LostAndFoundService
  ) {
  }

  ngOnInit(): void {
    this.lostAndFoundUpdateForm = this.fb.group({
      item: [null, [Validators.required]],
      location: [null, [Validators.required]],
      id: [null, [Validators.required]],
      fileName: [null, [Validators.required]],
      image: [null, [Validators.required]]
    });
    this.lostAndFoundUpdateForm.controls.id.setValue(this.data._id);
    this.lostAndFoundUpdateForm.controls.item.setValue(this.data.item);
    this.lostAndFoundUpdateForm.controls.location.setValue(this.data.location);
    this.lostAndFoundUpdateForm.controls.fileName.setValue(this.data.fileName);
  }

  showModal() {
    this.isVisible = true;
  }

  closeModel() {
    this.isVisible = false;
  }

  handleCancel() {
    this.closeModel();
  }

  submitForm() {
    this.pageLoading = true;
    const formData = new FormData();
    for (const i in this.lostAndFoundUpdateForm.controls) {
      this.lostAndFoundUpdateForm.controls[i].markAsDirty();
      this.lostAndFoundUpdateForm.controls[i].updateValueAndValidity();
    }
    formData.append('item', this.lostAndFoundUpdateForm.controls['item'].value);
    formData.append('location', this.lostAndFoundUpdateForm.controls['location'].value);
    formData.append('image', this.lostAndFoundUpdateForm.controls['image'].value);
    formData.append('id', this.lostAndFoundUpdateForm.controls['id'].value);
    formData.append('fileName', this.lostAndFoundUpdateForm.controls['fileName'].value);

    this.lostAndFoundService.updateLostAndFound(formData).subscribe(res => {
      this.pageLoading = false;
      this.isVisible = false;
      this.msg.create('success', 'Item updated successfully');
      this.reloadData.emit();
    }, error => {
      this.pageLoading = false;
    });
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.lostAndFoundUpdateForm.patchValue({
      image: file
    });
    this.lostAndFoundUpdateForm.get('image').updateValueAndValidity();
  }
}
