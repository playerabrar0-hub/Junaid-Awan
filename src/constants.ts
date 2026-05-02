import { type Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'pk-energy-max',
    name: 'PK Energy Max',
    price: 150,
    description: 'Unleash your ultimate potential with PK Energy Max. Formulated for high-intensity performance.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
    category: 'energy',
    flavor: 'Original Volt',
    benefits: ['B-Vitamins', 'Taurine', 'Caffeine Boost'],
    nutrition: {
      calories: '110 kcal',
      sugar: '27g',
      caffeine: '80mg',
      volume: '250ml'
    },
    trending: true,
    soldThisWeek: 1240
  },
  {
    id: 'pk-refresh-cola',
    name: 'PK Refresh Cola',
    price: 80,
    description: 'The classic refreshing taste, reinvented for the bold. Crisp, cool, and undeniably PK.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=800',
    category: 'soft',
    flavor: 'Classic Spark',
    benefits: ['Natural Flavors', 'Ice Cold Refreshment'],
    nutrition: {
      calories: '140 kcal',
      sugar: '35g',
      volume: '330ml'
    },
    soldThisWeek: 850
  },
  {
    id: 'pk-hydra-silver',
    name: 'PK Hydra Silver',
    price: 60,
    description: 'Stay hydrated with the pure essence of PK Hydra. Zero sugar, zero calories, maximum hydration.',
    image: 'https://images.unsplash.com/photo-1548964856-ac522749469a?auto=format&fit=crop&q=80&w=800',
    category: 'water',
    flavor: 'Pure Glacier',
    benefits: ['Electrolytes', 'Zero Calories', 'pH Balanced'],
    nutrition: {
      calories: '0 kcal',
      sugar: '0g',
      volume: '500ml'
    },
    trending: true,
    soldThisWeek: 2100
  },
  {
    id: 'pk-energy-berry',
    name: 'PK Energy Wild Berry',
    price: 160,
    description: 'A burst of forest berries combined with the PK energy signature. Sweet, tart, and powerful.',
    image: 'https://images.unsplash.com/photo-1510627489930-0c1b0ba8fa7e?auto=format&fit=crop&q=80&w=800',
    category: 'energy',
    flavor: 'Wild Berry Fusion',
    benefits: ['Antioxidants', 'Quick Energy', 'Natural Berry Juice'],
    nutrition: {
      calories: '120 kcal',
      sugar: '28g',
      caffeine: '75mg',
      volume: '250ml'
    },
    soldThisWeek: 420
  }
];

export const COLORS = {
  primary: '#E02424', // PK Red
  secondary: '#1A1A1A', // Deep Black
  accent: '#C0C0C0', // Silver
  white: '#FFFFFF'
};
