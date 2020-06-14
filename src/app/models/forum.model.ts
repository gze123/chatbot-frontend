export interface Forum {
  _id: string,
  title: string,
  description: string,
  createdBy: string,
  creatorName: string,
  createdAt: string,
  updatedAt: string,
  __v: number,
  editable: boolean,
  numberOfReplies: number
}

export interface ForumCreateModel {
  title: string;
  description: string;
}

export interface ForumUpdateModel {
  id: string;
  title: string;
  description: string;
}

export interface Comment {
  _id: string,
  content: string,
  createdBy: string,
  username: string,
  conversationId: string,
  createdAt: string,
  updatedAt: string,
  reply: Comment[],
  __v: number,
  editable: boolean
}

export interface CommentCreateModel {
  content: string;
  conversationId: string;
  replyId: string
}

// export interface Comment
