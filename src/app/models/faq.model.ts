export interface Faq {
  active: boolean;
  intentId: string;
  id: string;
  question: string;
  answer: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface FaqUpdateModel {
  id: string;
  question: string;
  answer: string;

}

export interface FaqCreateModel {
  question: string;
  answer: string;
}
