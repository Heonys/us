export type FormType = { id: string; password: string };

export interface Posts {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Item[];
}

export interface Item {
  author: string;
  collectionId: string;
  collectionName: string;
  created: string;
  expand: Expand;
  id: string;
  mediaUrl: string;
  news: string;
  text: string;
  title: string;
  type: "video" | "text" | "audio";
  updated: string;
}

export interface Expand {
  author: Author;
  news: News;
}

export interface Author {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  job: string;
  name: string;
  profileImage: string;
  updated: string;
}

export interface News {
  collectionId: string;
  collectionName: string;
  created: string;
  description: string;
  id: string;
  imageUrl: string;
  link: string;
  title: string;
  updated: string;
}

export interface LoginResponse {
  record: Record;
  token: string;
}

export interface Record {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  updated: string;
  username: string;
  verified: boolean;
}
