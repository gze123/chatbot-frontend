import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../shared/app.constant';
import {FaqCreateModel, FaqUpdateModel} from '../models/faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) {
  }

  addFaq(faqModel: FaqCreateModel) {
    return this.http.post(AppConstants.FAQ_CREATE, faqModel);
  }

  getFaq() {
    return this.http.get(AppConstants.FAQ_GET);
  }

  getFaqByKeyword(keyword: string) {
    return this.http.get(AppConstants.FAQ_GET + '?search=' + keyword);
  }

  editFaq(faqUpdateModel: FaqUpdateModel) {
    return this.http.post(AppConstants.FAQ_UPDATE, faqUpdateModel);
  }

  deleteFaq(id: string) {
    let arrayId = [];
    arrayId.push(id);
    return this.http.post(AppConstants.FAQ_DELETE, {id: arrayId});
  }
}
