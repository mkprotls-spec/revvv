
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  price?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'charpente' | 'renovation' | 'maconnerie';
  imageBefore: string;
  imageAfter: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
