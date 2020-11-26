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

  getNewsAndAnnouncementById(id: string) {
    return this.http.get(AppConstants.ANNOUNCEMENT_GET + '?id=' + id);
  }

  addNewsAndAnnouncement(newsAndAnnouncementModel: any) {
    return this.http.post(AppConstants.ANNOUNCEMENT_CREATE, newsAndAnnouncementModel);
  }

  updateNewsAndAnnouncement(newsAndAnnouncementModel: any) {
    return this.http.post(AppConstants.ANNOUNCEMENT_UPDATE, newsAndAnnouncementModel);
  }

  deleteNewsAndAnnouncement(id: string) {
    const arrayId = [];
    arrayId.push(id);
    return this.http.post(AppConstants.ANNOUNCEMENT_DELETE, {id: arrayId});
  }
}
