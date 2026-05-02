export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'energy' | 'soft' | 'water';
  flavor: string;
  benefits: string[];
  nutrition: {
    calories: string;
    sugar: string;
    caffeine?: string;
    volume: string;
  };
  trending?: boolean;
  soldThisWeek?: number;
}

export interface CartItem extends Product {
  quantity: number;
}
