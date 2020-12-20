import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../shared/app.constant';

@Injectable({
  providedIn: 'root'
})
export class NewsAndAnnouncementService {

  constructor(
    private http: HttpClient
  ) {
  }

  getNewsAndAnnouncement() {
    return this.http.get(AppConstants.ANNOUNCEMENT_GET);
  }

  getNewsAndAnnouncementByPage(pageNum: number) {
    return this.http.get(AppConstants.ANNOUNCEMENT_GET + '?page=' + pageNum);
  }

  getNewsAndAnnouncementById(id: string) {
    return this.http.get(AppConstants.ANNOUNCEMENT_GET + '?id=' + id);
  }

  addNewsAndAnnouncement(formData: FormData) {
    return this.http.post(AppConstants.ANNOUNCEMENT_CREATE, formData);
  }

  updateNewsAndAnnouncement(formData: FormData) {
    return this.http.post(AppConstants.ANNOUNCEMENT_UPDATE, formData);
  }

  deleteNewsAndAnnouncement(id: string) {
    const arrayId = [];
    arrayId.push(id);
    return this.http.post(AppConstants.ANNOUNCEMENT_DELETE, {id: arrayId});
  }
}
