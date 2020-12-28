import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {LostAndFoundService} from '../../../services/lost-and-found-service.service';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-lost-and-found-view-image',
  templateUrl: './lost-and-found-view-image.component.html',
  styleUrls: ['./lost-and-found-view-image.component.css']
})
export class LostAndFoundViewImageComponent implements OnInit {

  @Input()
  imageId: string;
  imageUrl: SafeUrl;
  isVisible: boolean;

  constructor(
    private lostAndFoundService: LostAndFoundService,
    private sanitizer: DomSanitizer,
    private modalService: NzModalService
  ) {
  }

  ngOnInit(): void {
    this.lostAndFoundService.getLostAndFoundImageById(this.imageId).subscribe(res => {
      const response: any = res;
      const arrayBuffer = response.result.image.data;
      const TYPED_ARRAY = new Uint8Array(arrayBuffer);
      const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
          return data + String.fromCharCode(byte);
        },
        '');
      const base64String = btoa(STRING_CHAR);
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64, ' + base64String);
    }, error => {
      this.imageUrl = 'null';
    });
  }

  showModal() {
    this.isVisible = true;
  }

  closeModel() {
    this.isVisible = false;
  }
}
