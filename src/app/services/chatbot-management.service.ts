import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../shared/app.constant';
import {ChatbotFileDelete, ChatbotIntentDelete} from '../models/chatbot.model';

@Injectable({
  providedIn: 'root'
})
export class ChatbotManagementService {

  constructor(
    private http: HttpClient
  ) {
  }

  createIntent(formData: FormData) {
    return this.http.post(AppConstants.CHATBOT_INTENT, formData);
  }

  getIntent() {
    return this.http.get(AppConstants.CHATBOT_INTENT_GET);
  }

  updateIntent(formData: FormData) {
    return this.http.post(AppConstants.CHATBOT_INTENT_UPDATE, formData);
  }

  deleteIntent(intent: ChatbotIntentDelete) {
    return this.http.post(AppConstants.CHATBOT_INTENT_DELETE, intent);
  }

  deleteFileIntent(deleteFile: ChatbotFileDelete) {
    return this.http.post(AppConstants.CHATBOT_INTENT_DELETE_FILE, deleteFile);
  }

  trainIntent() {
    return this.http.post(AppConstants.CHATBOT_INTENT_TRAIN, {});
  }
}
