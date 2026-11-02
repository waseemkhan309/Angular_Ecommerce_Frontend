export interface ProductRequest {
  pageSize: number;
  lastCreatedAt?: string | null; // ISO string format from backend DateTime
  lastId?: string | null;       // Guid string
  minPrice?: number;
  maxPrice?: number;
  categoryIds?: string[];
  rating?: number;
}

export interface ProductListResponse {
  success: boolean;
  message: string;
  data: CursorPagedResult<Product>;
}

export interface CursorPagedResult<T> {
  items: T[];
  hasMore: boolean;
  nextCreatedAt?: string | null;
  nextId?: string | null;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;         
  discount: number;
  stock: number;
  rating: number;
  category: {
    id: string;       
    name: string;
    description: string;
  };
  images: string[];
  createdAt: string;   
  updatedAt: string;   
}