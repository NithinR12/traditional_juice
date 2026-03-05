export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Juice' | 'Tea' | 'Coffee' | 'Snacks';
  image: string;
  isOrganic: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Green Vitality Juice',
    description: 'A refreshing blend of spinach, kale, apple, and lemon. 100% Organic.',
    price: 8.99,
    category: 'Juice',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=800',
    isOrganic: true,
  },
  {
    id: '2',
    name: 'Sunrise Carrot Boost',
    description: 'Freshly squeezed carrots with a hint of ginger and turmeric.',
    price: 7.99,
    category: 'Juice',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800',
    isOrganic: true,
  },
  {
    id: '3',
    name: 'Earl Grey Supreme',
    description: 'Premium organic black tea with natural bergamot oil.',
    price: 12.50,
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800',
    isOrganic: true,
  },
  {
    id: '4',
    name: 'Jasmine Green Tea',
    description: 'Delicate green tea leaves scented with fresh jasmine blossoms.',
    price: 11.00,
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&q=80&w=800',
    isOrganic: true,
  },
  {
    id: '5',
    name: 'Ethiopian Yirgacheffe',
    description: 'Light roast coffee with floral notes and citrus acidity.',
    price: 18.00,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800',
    isOrganic: true,
  },
  {
    id: '6',
    name: 'Colombian Dark Roast',
    description: 'Rich and bold dark roast with notes of chocolate and caramel.',
    price: 16.50,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    isOrganic: true,
  },
  {
    id: '7',
    name: 'Organic Almond Clusters',
    description: 'Crunchy almonds coated in organic dark chocolate and sea salt.',
    price: 9.99,
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800',
    isOrganic: true,
  },
  {
    id: '8',
    name: 'Dried Mango Slices',
    description: 'Naturally sweet, sun-dried mango slices with no added sugar.',
    price: 6.99,
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&q=80&w=800',
    isOrganic: true,
  },
];
