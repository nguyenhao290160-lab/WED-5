export interface Product {
  id: string;
  name: string;
  slug: string;
  category_id: string;
  description: string;
  image_url: string;
  current_price: number;
  original_price?: number;
  discount_percentage?: number;
  rating: number;
  review_count: number;
  specs?: Record<string, string>;
  pros?: string[];
  cons?: string[];
  affiliate_disclosure?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Retailer {
  name: string;
  price: number;
  affiliate_url: string;
  in_stock: boolean;
}

export interface ProductWithRetailers extends Product {
  retailers?: Retailer[];
}

export const categories: Category[] = [
  { id: '1', name: 'Laptops', slug: 'laptops' },
  { id: '2', name: 'Smartphones', slug: 'smartphones' },
  { id: '3', name: 'Tablets', slug: 'tablets' },
  { id: '4', name: 'Audio', slug: 'audio' },
  { id: '5', name: 'Wearables', slug: 'wearables' },
  { id: '6', name: 'Accessories', slug: 'accessories' },
];

export const products: ProductWithRetailers[] = [
  {
    id: '1',
    name: 'MacBook Pro 14"',
    slug: 'macbook-pro-14',
    category_id: '1',
    description: 'Powerful laptop with M3 Max chip, perfect for professionals and creators',
    image_url: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    current_price: 1899,
    original_price: 1999,
    discount_percentage: 5,
    rating: 4.8,
    review_count: 3421,
    specs: {
      processor: 'Apple M3 Max',
      ram: '36GB',
      storage: '512GB SSD',
      display: '14.2" Liquid Retina XDR',
      battery: '17 hours',
    },
    pros: ['Exceptional performance', 'Great battery life', 'Beautiful display', 'Lightweight'],
    cons: ['Expensive', 'Limited ports', 'No upgrades after purchase'],
    affiliate_disclosure: 'We may earn a commission if you click this link and make a purchase.',
    retailers: [
      {
        name: 'Apple',
        price: 1899,
        affiliate_url: 'https://apple.com',
        in_stock: true,
      },
      {
        name: 'Best Buy',
        price: 1899,
        affiliate_url: 'https://bestbuy.com',
        in_stock: true,
      },
      {
        name: 'Amazon',
        price: 1879,
        affiliate_url: 'https://amazon.com',
        in_stock: true,
      },
    ],
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    slug: 'samsung-galaxy-s24-ultra',
    category_id: '2',
    description: 'Ultimate flagship smartphone with advanced AI features and stunning camera',
    image_url: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
    current_price: 1299,
    original_price: 1499,
    discount_percentage: 13,
    rating: 4.7,
    review_count: 2156,
    specs: {
      processor: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '256GB',
      display: '6.8" Dynamic AMOLED',
      battery: '5000mAh',
      camera: '200MP Main',
    },
    pros: ['Excellent camera system', 'Smooth performance', 'Beautiful display', 'Long battery life'],
    cons: ['Expensive', 'No microSD card slot', 'Overheating in some scenarios'],
    affiliate_disclosure: 'We may earn a commission if you click this link and make a purchase.',
    retailers: [
      {
        name: 'Samsung',
        price: 1299,
        affiliate_url: 'https://samsung.com',
        in_stock: true,
      },
      {
        name: 'Amazon',
        price: 1299,
        affiliate_url: 'https://amazon.com',
        in_stock: true,
      },
      {
        name: 'B&H Photo',
        price: 1319,
        affiliate_url: 'https://bhphotovideo.com',
        in_stock: false,
      },
    ],
  },
  {
    id: '3',
    name: 'iPad Pro 12.9"',
    slug: 'ipad-pro-12-9',
    category_id: '3',
    description: 'Professional tablet with M2 chip and stunning display for creators',
    image_url: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    current_price: 1099,
    original_price: 1199,
    discount_percentage: 8,
    rating: 4.6,
    review_count: 1892,
    specs: {
      processor: 'Apple M2',
      ram: '8GB',
      storage: '128GB',
      display: '12.9" Liquid Retina XDR',
      battery: '10 hours',
    },
    pros: ['Powerful processor', 'Great for creative work', 'Premium build', 'Good display'],
    cons: ['Limited software compared to Mac', 'Expensive', 'Needs Apple Pencil separately'],
    affiliate_disclosure: 'We may earn a commission if you click this link and make a purchase.',
    retailers: [
      {
        name: 'Apple',
        price: 1099,
        affiliate_url: 'https://apple.com',
        in_stock: true,
      },
      {
        name: 'Amazon',
        price: 1089,
        affiliate_url: 'https://amazon.com',
        in_stock: true,
      },
    ],
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5 Headphones',
    slug: 'sony-wh-1000xm5',
    category_id: '4',
    description: 'Industry-leading noise-canceling wireless headphones',
    image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    current_price: 349,
    original_price: 399,
    discount_percentage: 13,
    rating: 4.9,
    review_count: 4521,
    specs: {
      driver: '40mm',
      frequency: '4Hz – 40kHz',
      battery: '30 hours',
      weight: '250g',
      connection: 'Bluetooth 5.3',
    },
    pros: ['Best-in-class noise cancellation', 'Exceptional sound quality', 'Comfortable fit', 'Long battery life'],
    cons: ['Expensive', 'Can be tight on some heads'],
    affiliate_disclosure: 'We may earn a commission if you click this link and make a purchase.',
    retailers: [
      {
        name: 'Amazon',
        price: 349,
        affiliate_url: 'https://amazon.com',
        in_stock: true,
      },
      {
        name: 'Best Buy',
        price: 349,
        affiliate_url: 'https://bestbuy.com',
        in_stock: true,
      },
      {
        name: 'B&H Photo',
        price: 349,
        affiliate_url: 'https://bhphotovideo.com',
        in_stock: true,
      },
    ],
  },
  {
    id: '5',
    name: 'Apple Watch Series 9',
    slug: 'apple-watch-series-9',
    category_id: '5',
    description: 'Advanced health and fitness tracker with always-on display',
    image_url: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    current_price: 399,
    original_price: 429,
    discount_percentage: 7,
    rating: 4.5,
    review_count: 2234,
    specs: {
      display: '1.9" Retina LTPO OLED',
      battery: 'All-day',
      water_resistance: 'Up to 50m',
      processor: 'S9',
      storage: '32GB',
    },
    pros: ['Excellent fitness tracking', 'Seamless iPhone integration', 'Great display', 'Reliable'],
    cons: ['Only works well with iPhone', 'Expensive', 'Battery not all-day with always-on display'],
    affiliate_disclosure: 'We may earn a commission if you click this link and make a purchase.',
    retailers: [
      {
        name: 'Apple',
        price: 399,
        affiliate_url: 'https://apple.com',
        in_stock: true,
      },
      {
        name: 'Amazon',
        price: 389,
        affiliate_url: 'https://amazon.com',
        in_stock: true,
      },
    ],
  },
  {
    id: '6',
    name: 'Dell XPS 15',
    slug: 'dell-xps-15',
    category_id: '1',
    description: 'Premium Windows laptop with stunning InfinityEdge display and RTX 4070',
    image_url: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    current_price: 1799,
    original_price: 1999,
    discount_percentage: 10,
    rating: 4.6,
    review_count: 1876,
    specs: {
      processor: 'Intel Core i9',
      ram: '32GB',
      storage: '1TB SSD',
      gpu: 'NVIDIA RTX 4070',
      display: '15.6" 4K OLED',
    },
    pros: ['Powerful performance', 'Beautiful display', 'Good design', 'RTX graphics'],
    cons: ['Runs hot', 'Expensive', 'Can be loud under load'],
    affiliate_disclosure: 'We may earn a commission if you click this link and make a purchase.',
    retailers: [
      {
        name: 'Dell',
        price: 1799,
        affiliate_url: 'https://dell.com',
        in_stock: true,
      },
      {
        name: 'Amazon',
        price: 1799,
        affiliate_url: 'https://amazon.com',
        in_stock: true,
      },
      {
        name: 'Best Buy',
        price: 1799,
        affiliate_url: 'https://bestbuy.com',
        in_stock: false,
      },
    ],
  },
  {
    id: '7',
    name: 'iPhone 15 Pro',
    slug: 'iphone-15-pro',
    category_id: '2',
    description: 'Latest iPhone with A17 Pro chip and improved camera system',
    image_url: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
    current_price: 999,
    original_price: 1099,
    discount_percentage: 9,
    rating: 4.8,
    review_count: 5234,
    specs: {
      processor: 'A17 Pro',
      ram: '8GB',
      storage: '256GB',
      display: '6.1" Super Retina XDR',
      battery: 'Up to 29 hours',
      camera: '48MP Main',
    },
    pros: ['Fast performance', 'Improved cameras', 'Good battery life', 'Premium build'],
    cons: ['Expensive', 'Minimal upgrades from 14 Pro', 'No charger in box'],
    affiliate_disclosure: 'We may earn a commission if you click this link and make a purchase.',
    retailers: [
      {
        name: 'Apple',
        price: 999,
        affiliate_url: 'https://apple.com',
        in_stock: true,
      },
      {
        name: 'Amazon',
        price: 999,
        affiliate_url: 'https://amazon.com',
        in_stock: true,
      },
      {
        name: 'Verizon',
        price: 999,
        affiliate_url: 'https://verizon.com',
        in_stock: true,
      },
    ],
  },
];

export function getFeaturedProducts(): ProductWithRetailers[] {
  return products
    .sort((a, b) => (b.discount_percentage || 0) - (a.discount_percentage || 0))
    .slice(0, 6);
}

export function getProductBySlug(slug: string): ProductWithRetailers | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): ProductWithRetailers[] {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return products.filter((p) => p.category_id === category.id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
