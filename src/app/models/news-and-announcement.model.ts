export interface Attachment {
  fileName: string;
  link: number;
}

export interface NewsAndAnnouncementModel {
  attachments: AttachmentsImage[];
  contents: string;
  createdAt: Date;
  createdBy: string;
  images: AttachmentsImage[];
  title: string;
  updatedAt: Date;
  __v: number;
  _id: string;
}

export interface AttachmentsImage {
  fileName: string;
  filePath: string;
  url: string;
}

export interface DeleteFile {
  id: string;
  filePath: string;
}
