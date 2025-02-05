export interface Content {
  id?: string;
  title: string;
  summary: string;
  content: string;
  category: {
    id: string;
    name: string;
  };
  tags: string[];
  thumbnail?: string;
  createdAt?: string;
  updatedAt?: string;
}
  
  export interface Category {
    id: string;
    title: string;
    slug: string;
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
    createdAt: Date;
    updatedAt: Date;
    readTime: number;
    viewCount: number;
  }
  
  export type Article = Content;
  export type Tutorial = Content & {
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    videoUrl?: string;
  };