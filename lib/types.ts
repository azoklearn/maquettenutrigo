// Types principaux pour le site e-commerce

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  category: string;
  brand: string;
  inStock: boolean;
  rating?: number;
  reviews?: number;
  nutritionalInfo?: NutritionalInfo;
  tags?: string[];
  featured?: boolean;
  bestseller?: boolean;
}

export interface NutritionalInfo {
  servingSize: string;
  servingsPerContainer: number;
  calories?: number;
  protein?: string;
  carbs?: string;
  fats?: string;
  ingredients: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  productCount?: number;
  icon?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  addresses?: Address[];
}

export interface Address {
  id: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault?: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  shippingAddress: Address;
}
