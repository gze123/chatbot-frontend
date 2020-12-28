export interface ChatbotIntent {
  attachments: [];
  createdAt: Date;
  input: string;
  intentId: string;
  intentName: string;
  response: string;
  similarResponses: [];
  trainingPhrases: [];
  updatedAt: Date;
  _id: string;
}

export interface ChatbotIntentDelete {
  id: string;
  intentId: string;
  intentName: string;
}

export interface ChatbotFileDelete {
  id: string;
  filePath: string;
}

export interface ChatbotTrainIntent {
  intentId: string;
  trainingPhrases: string[];
  responseTexts: string[];
}