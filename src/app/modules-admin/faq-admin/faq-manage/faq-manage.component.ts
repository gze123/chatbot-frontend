import {Component, OnInit} from '@angular/core';
import {FaqService} from "../../../services/faq-service.service";
import {Faq} from "../../../models/faq.model";

@Component({
  selector: 'app-faq-manage',
  templateUrl: './faq-manage.component.html',
  styleUrls: ['./faq-manage.component.css']
})


export class FaqManageComponent implements OnInit {
  pageLoading = false;
  editCache: { [key: string]: { edit: boolean; data: Faq } } = {};
  faqData: Faq[] = [];

  constructor(private faqService: FaqService) {
  }


  ngOnInit(): void {
    this.pageLoading = true;
    this.faqService.getFaq().subscribe(res => {
      const response: any = res;
      this.faqData = response.result;
      this.updateEditCache();
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
    // for (let i = 0; i < 50; i++) {
    //   data.push({
    //     id: `${i}`,
    //     name: `Edrward ${i}`,
    //     age: 32,
    //     address: `London Park no. ${i}`
    //   });
    // }
    // this.listOfData = data;
  }

  startEdit(id: string): void {
    console.log(id)
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.faqData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: {...this.faqData[index]},
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.faqData.findIndex(item => item._id === id);
    console.log(this.editCache[id].data._id, this.editCache[id].data.question, this.editCache[id].data.answer);
    let faqUpdateModel = {
      id: this.editCache[id].data._id,
      question: this.editCache[id].data.question,
      answer: this.editCache[id].data.answer
    }
    this.faqService.editFaq(faqUpdateModel).subscribe(res => {
      console.log(res)
    }, error => {

    })
    Object.assign(this.faqData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.faqData.forEach(item => {
      this.editCache[item._id] = {
        edit: false,
        data: {...item}
      };
    });
  }

  deleteRow(id: string): void {
    this.faqService.deleteFaq(id).subscribe(res => {
      console.log(res)
    }, error => {

    })
    this.faqData = this.faqData.filter(d => d._id !== id);
  }
}
