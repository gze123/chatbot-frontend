export interface TicketCreateModel {
  title: string,
  description: string,
  category: string
}

export interface Resolution {
  resolvedBy: string;
  resolvedDate: string;
  solution: string;
}

export interface TransactionLog {
  status: string;
  date: number;
  assignedTo: string;
}

export interface TicketModel {
  assignedTo: string;
  category: string;
  createdAt: string;
  createdBy: string;
  description: string;
  resolution: Resolution;
  status: string;
  title: string;
  transactionLog: TransactionLog[];
  updatedAt: string;
  __v: number;
  _id: string;
  assigneeName: string;
}

export interface SolutionModel {
  id: string;
  solution: string;
}
