export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
  popular?: boolean;
  mamdaniPick?: boolean;
  image?: string;
}

// Category-level fallback images (used when an item has no specific image)
export const categoryImages: Record<string, string> = {
  Kababs: '/menu/beef-kabab.jpg',
  Breads: '/menu/kabab-roll.jpg',
  Curries: '/menu/nihari.jpg',
  'Rice & Biryani': '/menu/chicken-biryani.jpg',
  Seafood: '/menu/chicken-curry.jpg',
  Tandoori: '/menu/chicken-tikka.jpg',
  Rolls: '/menu/kabab-roll.jpg',
  Vegetables: '/menu/chicken-curry.jpg',
  Breakfast: '/menu/haleem.jpg',
  Samosas: '/menu/vegetable-samosa.jpg',
  Desserts: '/menu/patties.jpg',
  Drinks: '/menu/haleem.jpg',
};

export const heroImage = '/menu/beef-kabab.jpg';

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
  { name: 'Beef Tikka Kabab', description: 'Tender marinated beef cubes grilled over charcoal to perfection', price: 11.99, category: 'Kababs', popular: true, image: '/menu/beef-tikka.jpg' },
  { name: 'Chicken Chapli Kabab', description: 'Spiced ground chicken patties with fresh herbs and tomatoes', price: 9.99, category: 'Kababs', image: '/menu/chicken-kabab.jpg' },
  { name: 'Seekh Kabab (Beef)', description: 'Minced beef seasoned with aromatic spices, grilled on skewers', price: 10.49, category: 'Kababs', popular: true, image: '/menu/beef-kabab.jpg' },
  { name: 'Seekh Kabab (Chicken)', description: 'Minced chicken with green chilies and fresh coriander on skewers', price: 9.99, category: 'Kababs', image: '/menu/chicken-kabab.jpg' },
  { name: 'Malai Boti', description: 'Cream-marinated chicken pieces grilled until tender and juicy', price: 11.49, category: 'Kababs', image: '/menu/chicken-malai-tikka.jpg' },
  { name: 'Lamb Chops', description: 'Premium lamb chops marinated in special spice blend and chargrilled', price: 15.99, category: 'Kababs', popular: true, image: '/menu/goat-chop.jpg' },
  { name: 'Reshmi Kabab', description: 'Silky smooth chicken kababs with cashew and cream marinade', price: 10.99, category: 'Kababs', image: '/menu/beef-bihari-kabab.jpg' },
  { name: 'Mixed Grill Platter', description: 'An assortment of our finest kababs served with naan and chutney', price: 18.99, category: 'Kababs', popular: true, image: '/menu/lamb-kabab.jpg' },

  // Breads
  { name: 'Naan', description: 'Soft leavened bread baked in our tandoor oven', price: 1.65, category: 'Breads', image: '/menu/puri.jpg' },
  { name: 'Roti', description: 'Whole wheat flatbread cooked on the tandoor', price: 1.65, category: 'Breads', image: '/menu/puri.jpg' },
  { name: 'Paratha', description: 'Flaky layered flatbread with butter', price: 2.75, category: 'Breads', image: '/menu/puri.jpg' },
  { name: 'Keema Paratha', description: 'Paratha stuffed with spiced minced meat filling', price: 5.49, category: 'Breads', popular: true, image: '/menu/kabab-roll.jpg' },
  { name: 'Garlic Naan', description: 'Naan topped with fresh garlic and butter', price: 2.49, category: 'Breads', image: '/menu/puri.jpg' },
  { name: 'Aloo Paratha', description: 'Paratha stuffed with seasoned potato filling', price: 4.49, category: 'Breads', image: '/menu/puri.jpg' },

  // Curries
  { name: 'Nihari', description: 'Slow-cooked beef shank stew with rich bone marrow gravy', price: 12.99, category: 'Curries', popular: true, image: '/menu/nihari.jpg' },
  { name: 'Haleem', description: 'Slow-cooked blend of wheat, barley, and tender shredded meat', price: 9.99, category: 'Curries', popular: true, image: '/menu/haleem.jpg' },
  { name: 'Chicken Karahi', description: 'Chicken cooked in a wok with tomatoes, ginger, and green chilies', price: 11.99, category: 'Curries', image: '/menu/goat-karahi.jpg' },
  { name: 'Palak Gosht', description: 'Tender meat cooked with fresh spinach and spices', price: 12.49, category: 'Curries', image: '/menu/chicken-curry.jpg' },
  { name: 'Butter Chicken', description: 'Chicken in a creamy tomato-based sauce with aromatic spices', price: 11.49, category: 'Curries', image: '/menu/butter-chicken.jpg' },
  { name: 'Daal Gosht', description: 'Lentils slow-cooked with tender meat pieces', price: 11.99, category: 'Curries', image: '/menu/chicken-curry.jpg' },

  // Rice & Biryani
  { name: 'Chicken Biryani', description: 'Fragrant basmati rice layered with spiced chicken and saffron', price: 10.99, category: 'Rice & Biryani', popular: true, mamdaniPick: true, image: '/menu/chicken-biryani.jpg' },
  { name: 'Beef Biryani', description: 'Aromatic rice with tender marinated beef and whole spices', price: 11.99, category: 'Rice & Biryani', mamdaniPick: true, image: '/menu/goat-biryani.jpg' },
  { name: 'Lamb Biryani', description: 'Premium lamb pieces with saffron-infused basmati rice', price: 13.99, category: 'Rice & Biryani', mamdaniPick: true, image: '/menu/mamdani-biryani.jpg' },
  { name: 'Vegetable Pulao', description: 'Basmati rice cooked with seasonal vegetables and mild spices', price: 8.99, category: 'Rice & Biryani', image: '/menu/chicken-biryani.jpg' },

  // Seafood
  { name: 'Fish Fry', description: 'Crispy fried fish fillets with signature masala coating', price: 13.19, category: 'Seafood', popular: true, image: '/menu/patties.jpg' },
  { name: 'Tandoori Fish', description: 'Fish marinated in tandoori spices and grilled in the clay oven', price: 13.99, category: 'Seafood', image: '/menu/chicken-tikka.jpg' },
  { name: 'Fish Curry', description: 'Fish fillets simmered in a rich and aromatic curry sauce', price: 12.99, category: 'Seafood', image: '/menu/goat-karahi.jpg' },
  { name: 'Prawn Karahi', description: 'Jumbo prawns cooked in a spiced tomato and ginger wok sauce', price: 14.99, category: 'Seafood', image: '/menu/goat-karahi.jpg' },

  // Tandoori
  { name: 'Tandoori Chicken (Half)', description: 'Half chicken marinated in yogurt and spices, roasted in tandoor', price: 8.99, category: 'Tandoori', popular: true, image: '/menu/chicken-tikka.jpg' },
  { name: 'Tandoori Chicken (Full)', description: 'Full chicken marinated overnight and roasted to smoky perfection', price: 15.99, category: 'Tandoori', image: '/menu/chicken-tikka.jpg' },
  { name: 'Chicken Tikka', description: 'Boneless chicken marinated in spiced yogurt and chargrilled', price: 10.49, category: 'Tandoori', image: '/menu/chicken-tikka.jpg' },

  // Rolls
  { name: 'Chicken Tikka Roll', description: 'Grilled chicken tikka wrapped in paratha with fresh salad', price: 7.99, category: 'Rolls', image: '/menu/kabab-roll.jpg' },
  { name: 'Seekh Kabab Roll', description: 'Seekh kabab wrapped in fresh paratha with chutney and onions', price: 7.99, category: 'Rolls', image: '/menu/kabab-roll.jpg' },
  { name: 'Chapli Kabab Roll', description: 'Chapli kabab with salad and sauce in a warm paratha wrap', price: 7.49, category: 'Rolls', image: '/menu/kabab-roll.jpg' },

  // Vegetables
  { name: 'Daal Chana', description: 'Split chickpea lentils tempered with cumin and garlic', price: 8.49, category: 'Vegetables', image: '/menu/chicken-curry.jpg' },
  { name: 'Aloo Gobi', description: 'Cauliflower and potatoes cooked with turmeric and spices', price: 8.99, category: 'Vegetables', image: '/menu/chicken-curry.jpg' },
  { name: 'Palak Paneer', description: 'Fresh spinach with homemade cottage cheese cubes', price: 9.99, category: 'Vegetables', image: '/menu/chicken-curry.jpg' },
  { name: 'Baingan Bharta', description: 'Smoky roasted eggplant mashed with onions and tomatoes', price: 8.99, category: 'Vegetables', image: '/menu/chicken-curry.jpg' },

  // Breakfast
  { name: 'Halwa Puri', description: 'Sweet semolina halwa with fluffy puris and chickpea curry', price: 7.99, category: 'Breakfast', popular: true, image: '/menu/halwa-puri.jpg' },
  { name: 'Paya', description: 'Slow-cooked trotters in rich traditional spiced broth', price: 10.99, category: 'Breakfast', image: '/menu/nihari.jpg' },
  { name: 'Omelette with Paratha', description: 'Fluffy masala omelette served with fresh paratha', price: 6.99, category: 'Breakfast', image: '/menu/puri.jpg' },

  // Samosas
  { name: 'Samosa (2 pcs)', description: 'Crispy pastry filled with spiced potatoes and peas', price: 2.99, category: 'Samosas', mamdaniPick: true, image: '/menu/vegetable-samosa.jpg' },
  { name: 'Chicken Samosa (2 pcs)', description: 'Flaky pastry filled with seasoned minced chicken', price: 3.99, category: 'Samosas', mamdaniPick: true, image: '/menu/chicken-samosa.jpg' },
  { name: 'Samosa Chaat', description: 'Crushed samosas topped with chickpeas, yogurt, and chutneys', price: 5.99, category: 'Samosas', image: '/menu/samosa-chaat.jpg' },

  // Desserts
  { name: 'Gulab Jamun (2 pcs)', description: 'Soft milk dumplings soaked in rose-scented sugar syrup', price: 3.49, category: 'Desserts', image: '/menu/patties.jpg' },
  { name: 'Kheer', description: 'Creamy rice pudding with cardamom, pistachios, and almonds', price: 3.99, category: 'Desserts', image: '/menu/mango-lassi.jpg' },
  { name: 'Ras Malai', description: 'Soft cheese patties in sweetened, cardamom-flavored milk', price: 4.49, category: 'Desserts', image: '/menu/mango-lassi.jpg' },
  { name: 'Falooda', description: 'Rose-flavored milk drink with vermicelli, basil seeds, and ice cream', price: 5.99, category: 'Desserts', image: '/menu/mango-lassi.jpg' },

  // Drinks
  { name: 'Tea with Milk', description: 'Traditional Pakistani chai brewed with cardamom and milk', price: 1.65, category: 'Drinks', image: '/menu/tea-with-milk.jpg' },
  { name: 'Kashmiri Chai', description: 'Pink tea made with special Kashmiri leaves and pistachios', price: 2.99, category: 'Drinks', image: '/menu/tea-with-milk.jpg' },
  { name: 'Lassi (Mango)', description: 'Thick mango yogurt drink blended to creamy perfection', price: 4.39, category: 'Drinks', popular: true, image: '/menu/mango-lassi.jpg' },
  { name: 'Lassi (Sweet)', description: 'Traditional sweet yogurt drink with a hint of cardamom', price: 3.49, category: 'Drinks', image: '/menu/mango-lassi.jpg' },
  { name: 'Lassi (Salt)', description: 'Refreshing salted yogurt drink with roasted cumin', price: 3.49, category: 'Drinks', image: '/menu/mango-lassi.jpg' },
  { name: 'Soft Drink', description: 'Coca-Cola, Sprite, or Fanta', price: 1.99, category: 'Drinks', image: '/menu/mango-lassi.jpg' },
];

export const popularItems = menuItems.filter(item => item.popular);
