export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
  popular?: boolean;
  mamdaniPick?: boolean;
  image?: string;
}

// Category-level placeholder images from Unsplash
export const categoryImages: Record<string, string> = {
  Kababs: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
  Breads: 'https://images.unsplash.com/photo-1611107517117-e5f1b0c898bf?w=400&h=300&fit=crop',
  Curries: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
  'Rice & Biryani': 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop',
  Seafood: 'https://images.unsplash.com/photo-1626253836448-e2376678c191?w=400&h=300&fit=crop',
  Tandoori: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?w=400&h=300&fit=crop',
  Rolls: 'https://images.unsplash.com/photo-1632660346941-023cc64e1252?w=400&h=300&fit=crop',
  Vegetables: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
  Breakfast: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop',
  Samosas: 'https://images.unsplash.com/photo-1601050690294-397f3c324515?w=400&h=300&fit=crop',
  Desserts: 'https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?w=400&h=300&fit=crop',
  Drinks: 'https://images.unsplash.com/photo-1561336526-2914f13ceb36?w=400&h=300&fit=crop',
};

export const heroImage = 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=1200&h=900&fit=crop';

export const categories = [
  'All',
  'Kababs',
  'Breads',
  'Curries',
  'Rice & Biryani',
  'Seafood',
  'Tandoori',
  'Rolls',
  'Vegetables',
  'Breakfast',
  'Samosas',
  'Desserts',
  'Drinks',
] as const;

export const menuItems: MenuItem[] = [
  // Kababs
  { name: 'Beef Tikka Kabab', description: 'Tender marinated beef cubes grilled over charcoal to perfection', price: 11.99, category: 'Kababs', popular: true, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
  { name: 'Chicken Chapli Kabab', description: 'Spiced ground chicken patties with fresh herbs and tomatoes', price: 9.99, category: 'Kababs', image: 'https://images.unsplash.com/photo-1599307767316-776533bb941c?w=400&h=300&fit=crop' },
  { name: 'Seekh Kabab (Beef)', description: 'Minced beef seasoned with aromatic spices, grilled on skewers', price: 10.49, category: 'Kababs', popular: true, image: 'https://images.unsplash.com/photo-1696950170493-c045e368cf8c?w=400&h=300&fit=crop' },
  { name: 'Seekh Kabab (Chicken)', description: 'Minced chicken with green chilies and fresh coriander on skewers', price: 9.99, category: 'Kababs', image: 'https://images.unsplash.com/photo-1696950170493-c045e368cf8c?w=400&h=300&fit=crop' },
  { name: 'Malai Boti', description: 'Cream-marinated chicken pieces grilled until tender and juicy', price: 11.49, category: 'Kababs', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
  { name: 'Lamb Chops', description: 'Premium lamb chops marinated in special spice blend and chargrilled', price: 15.99, category: 'Kababs', popular: true, image: 'https://images.unsplash.com/photo-1550367363-ea12860cc124?w=400&h=300&fit=crop' },
  { name: 'Reshmi Kabab', description: 'Silky smooth chicken kababs with cashew and cream marinade', price: 10.99, category: 'Kababs', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
  { name: 'Mixed Grill Platter', description: 'An assortment of our finest kababs served with naan and chutney', price: 18.99, category: 'Kababs', popular: true, image: 'https://images.unsplash.com/photo-1603383822974-2d317b11fe2e?w=400&h=300&fit=crop' },

  // Breads
  { name: 'Naan', description: 'Soft leavened bread baked in our tandoor oven', price: 1.65, category: 'Breads' },
  { name: 'Roti', description: 'Whole wheat flatbread cooked on the tandoor', price: 1.65, category: 'Breads' },
  { name: 'Paratha', description: 'Flaky layered flatbread with butter', price: 2.75, category: 'Breads' },
  { name: 'Keema Paratha', description: 'Paratha stuffed with spiced minced meat filling', price: 5.49, category: 'Breads', popular: true },
  { name: 'Garlic Naan', description: 'Naan topped with fresh garlic and butter', price: 2.49, category: 'Breads' },
  { name: 'Aloo Paratha', description: 'Paratha stuffed with seasoned potato filling', price: 4.49, category: 'Breads' },

  // Curries
  { name: 'Nihari', description: 'Slow-cooked beef shank stew with rich bone marrow gravy', price: 12.99, category: 'Curries', popular: true },
  { name: 'Haleem', description: 'Slow-cooked blend of wheat, barley, and tender shredded meat', price: 9.99, category: 'Curries', popular: true },
  { name: 'Chicken Karahi', description: 'Chicken cooked in a wok with tomatoes, ginger, and green chilies', price: 11.99, category: 'Curries' },
  { name: 'Palak Gosht', description: 'Tender meat cooked with fresh spinach and spices', price: 12.49, category: 'Curries' },
  { name: 'Butter Chicken', description: 'Chicken in a creamy tomato-based sauce with aromatic spices', price: 11.49, category: 'Curries' },
  { name: 'Daal Gosht', description: 'Lentils slow-cooked with tender meat pieces', price: 11.99, category: 'Curries' },

  // Rice & Biryani
  { name: 'Chicken Biryani', description: 'Fragrant basmati rice layered with spiced chicken and saffron', price: 10.99, category: 'Rice & Biryani', popular: true, mamdaniPick: true },
  { name: 'Beef Biryani', description: 'Aromatic rice with tender marinated beef and whole spices', price: 11.99, category: 'Rice & Biryani', mamdaniPick: true },
  { name: 'Lamb Biryani', description: 'Premium lamb pieces with saffron-infused basmati rice', price: 13.99, category: 'Rice & Biryani', mamdaniPick: true },
  { name: 'Vegetable Pulao', description: 'Basmati rice cooked with seasonal vegetables and mild spices', price: 8.99, category: 'Rice & Biryani' },

  // Seafood
  { name: 'Fish Fry', description: 'Crispy fried fish fillets with signature masala coating', price: 13.19, category: 'Seafood', popular: true },
  { name: 'Tandoori Fish', description: 'Fish marinated in tandoori spices and grilled in the clay oven', price: 13.99, category: 'Seafood' },
  { name: 'Fish Curry', description: 'Fish fillets simmered in a rich and aromatic curry sauce', price: 12.99, category: 'Seafood' },
  { name: 'Prawn Karahi', description: 'Jumbo prawns cooked in a spiced tomato and ginger wok sauce', price: 14.99, category: 'Seafood' },

  // Tandoori
  { name: 'Tandoori Chicken (Half)', description: 'Half chicken marinated in yogurt and spices, roasted in tandoor', price: 8.99, category: 'Tandoori', popular: true },
  { name: 'Tandoori Chicken (Full)', description: 'Full chicken marinated overnight and roasted to smoky perfection', price: 15.99, category: 'Tandoori' },
  { name: 'Chicken Tikka', description: 'Boneless chicken marinated in spiced yogurt and chargrilled', price: 10.49, category: 'Tandoori' },

  // Rolls
  { name: 'Chicken Tikka Roll', description: 'Grilled chicken tikka wrapped in paratha with fresh salad', price: 7.99, category: 'Rolls' },
  { name: 'Seekh Kabab Roll', description: 'Seekh kabab wrapped in fresh paratha with chutney and onions', price: 7.99, category: 'Rolls' },
  { name: 'Chapli Kabab Roll', description: 'Chapli kabab with salad and sauce in a warm paratha wrap', price: 7.49, category: 'Rolls' },

  // Vegetables
  { name: 'Daal Chana', description: 'Split chickpea lentils tempered with cumin and garlic', price: 8.49, category: 'Vegetables' },
  { name: 'Aloo Gobi', description: 'Cauliflower and potatoes cooked with turmeric and spices', price: 8.99, category: 'Vegetables' },
  { name: 'Palak Paneer', description: 'Fresh spinach with homemade cottage cheese cubes', price: 9.99, category: 'Vegetables' },
  { name: 'Baingan Bharta', description: 'Smoky roasted eggplant mashed with onions and tomatoes', price: 8.99, category: 'Vegetables' },

  // Breakfast
  { name: 'Halwa Puri', description: 'Sweet semolina halwa with fluffy puris and chickpea curry', price: 7.99, category: 'Breakfast', popular: true },
  { name: 'Paya', description: 'Slow-cooked trotters in rich traditional spiced broth', price: 10.99, category: 'Breakfast' },
  { name: 'Omelette with Paratha', description: 'Fluffy masala omelette served with fresh paratha', price: 6.99, category: 'Breakfast' },

  // Samosas
  { name: 'Samosa (2 pcs)', description: 'Crispy pastry filled with spiced potatoes and peas', price: 2.99, category: 'Samosas', mamdaniPick: true },
  { name: 'Chicken Samosa (2 pcs)', description: 'Flaky pastry filled with seasoned minced chicken', price: 3.99, category: 'Samosas', mamdaniPick: true },
  { name: 'Samosa Chaat', description: 'Crushed samosas topped with chickpeas, yogurt, and chutneys', price: 5.99, category: 'Samosas' },

  // Desserts
  { name: 'Gulab Jamun (2 pcs)', description: 'Soft milk dumplings soaked in rose-scented sugar syrup', price: 3.49, category: 'Desserts' },
  { name: 'Kheer', description: 'Creamy rice pudding with cardamom, pistachios, and almonds', price: 3.99, category: 'Desserts' },
  { name: 'Ras Malai', description: 'Soft cheese patties in sweetened, cardamom-flavored milk', price: 4.49, category: 'Desserts' },
  { name: 'Falooda', description: 'Rose-flavored milk drink with vermicelli, basil seeds, and ice cream', price: 5.99, category: 'Desserts' },

  // Drinks
  { name: 'Tea with Milk', description: 'Traditional Pakistani chai brewed with cardamom and milk', price: 1.65, category: 'Drinks' },
  { name: 'Kashmiri Chai', description: 'Pink tea made with special Kashmiri leaves and pistachios', price: 2.99, category: 'Drinks' },
  { name: 'Lassi (Mango)', description: 'Thick mango yogurt drink blended to creamy perfection', price: 4.39, category: 'Drinks', popular: true },
  { name: 'Lassi (Sweet)', description: 'Traditional sweet yogurt drink with a hint of cardamom', price: 3.49, category: 'Drinks' },
  { name: 'Lassi (Salt)', description: 'Refreshing salted yogurt drink with roasted cumin', price: 3.49, category: 'Drinks' },
  { name: 'Soft Drink', description: 'Coca-Cola, Sprite, or Fanta', price: 1.99, category: 'Drinks' },
];

export const popularItems = menuItems.filter(item => item.popular);
