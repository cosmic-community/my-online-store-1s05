export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    category_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export type InventoryStatus = 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Pre-Order';

export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name?: string;
    sku?: string;
    price?: number;
    description?: string;
    short_description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    inventory_status?: InventoryStatus | { key: string; value: string };
    stock_quantity?: number;
    category?: Category;
    featured?: boolean;
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    reviewer_name?: string;
    rating?: number | { key: string; value: string };
    review_title?: string;
    review_content?: string;
    verified_purchase?: boolean;
    product?: Product;
    review_date?: string;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}