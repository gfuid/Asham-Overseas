
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  material?: string;
  usage?: string[];
  features?: string[];
}

export interface Review {
  id: string;
  user: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  productName?: string;
}

export interface BusinessStat {
  label: string;
  value: string;
  icon?: string;
}
