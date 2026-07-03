export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string; // in Indonesian Rupiah format (e.g., "65k" or "Rp 65,000")
  priceNum: number; // numeric price for sorting if needed
  category: MenuCategory;
  image: string;
  tags?: string[]; // e.g. ["Vegan", "Gluten-Free", "Chef's Special", "Spicy"]
}

export type MenuCategory =
  | 'Appetizers'
  | 'Bread & Dip'
  | 'Salads'
  | 'Indonesian Favorites'
  | 'Breakfast'
  | 'Gourmet Sandwiches'
  | 'Main Dishes'
  | 'Dessert'
  | 'Coffee'
  | 'Tea'
  | 'Morning Cocktails'
  | 'Fresh Juice'
  | 'Milk Shakes'
  | 'Smoothies'
  | 'Mineral Water'
  | 'Soft Drinks'
  | 'Beer'
  | 'Cocktails'
  | 'Wine';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown or detailed text
  category: BlogCategory;
  image: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  tags: string[];
  comments?: BlogComment[];
}

export type BlogCategory =
  | 'Travel Tips'
  | 'Nusa Penida Guide'
  | 'Coffee'
  | 'Food'
  | 'Lifestyle'
  | 'Events'
  | 'Restaurant News';

export interface BlogComment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number; // 1-5
  comment: string;
  avatar: string;
  date: string;
  role?: string; // e.g. "Google Reviewer", "Digital Nomad"
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  description: string;
  image: string;
}

export interface ReservationData {
  fullName: string;
  phoneNumber: string;
  guests: number;
  date: string;
  time: string;
  specialRequest: string;
}
