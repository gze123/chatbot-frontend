import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../shared/app.constant';

@Injectable({
  providedIn: 'root'
})
export class LostAndFoundService {


  constructor(private http: HttpClient) {
  }

  addLostAndFound(formData: FormData) {
    return this.http.post(AppConstants.LOST_AND_FOUND_CREATE, formData);
  }

  getLostAndFound(data: any) {
    return this.http.get(AppConstants.LOST_AND_FOUND_GET, {params: data});
  }


  getLostAndFoundImageById(id: string) {
    return this.http.get(AppConstants.LOST_AND_FOUND_GET_IMAGE + id);
  }

  updateLostAndFound(formData: FormData) {
    return this.http.post(AppConstants.LOST_AND_FOUND_UPDATE, formData);
  }

  deleteLostAndFound(id: string) {
    const arrayId = [];
    arrayId.push(id);
    return this.http.post(AppConstants.LOST_AND_FOUND_DELETE, {id: arrayId});
  }
}
