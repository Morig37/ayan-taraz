export interface Author {
  id: string;
  name: string;
  email: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Content {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  thumbnail?: string;
  author: Author;
  category: Category;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  readTime?: number;
  viewCount?: number;
}