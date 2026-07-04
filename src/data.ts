import { Attraction, BlogPost, MenuItem, Review } from './types';

// Let's use the exact names of the generated images
export const IMAGES = {
  logo: 'img/Logo.png',
  hero: 'img/Screenshot_3-7-2026_1932_www.instagram.com.jpeg',
  smoothieBowl: 'img/Screenshot_3-7-2026_19550_www.instagram.com.jpeg',
  coffee: 'img/alily_specialty_coffee_1783062210888.jpg',
  
  // High quality Unsplash replacements for other food/lifestyle/interior shots
  avocadoToast: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800',
  bigBreakfast: 'https://images.unsplash.com/photo-1496042399014-dc73c4f2bde1?auto=format&fit=crop&q=80&w=800',
  croissant: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
  icedLatte: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=800',
  matcha: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=800',
  nasiGoreng: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&q=80&w=800',
  pasta: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
  pizza: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
  lavaCake: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800',
  redVelvet: 'https://images.unsplash.com/photo-1586985289688-ca9cf4993ec0?auto=format&fit=crop&q=80&w=800',
  
  // Gallery images
  galleryInterior1: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000',
  galleryInterior2: 'https://images.unsplash.com/photo-1485686531765-ba63b07845a7?auto=format&fit=crop&q=80&w=1000',
  galleryOutdoor: 'https://images.unsplash.com/photo-1504624268003-f11691f8b277?auto=format&fit=crop&q=80&w=1000',
  
  // Avatars
  avatar1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
  avatar2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
  avatar3: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300',
  avatarChef: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=300',
  avatarBarista: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=300',
  
  // Attractions
  crystalBay: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
  toyapakeh: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=800',
  brokenBeach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
  angelsBillabong: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800',
  
  // Blog
  blogNusaPenida: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
  blogCoffee: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=1200',
  blogIngredients: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
  blogSunset: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200',
  blogPedVillage: 'https://images.unsplash.com/photo-1537953773315-2213cdeb609c?auto=format&fit=crop&q=80&w=1200',
};

export const MENU_ITEMS: MenuItem[] = [
  // 1. APPETIZERS
  {
    id: 'app1',
    name: 'Garlic Shrimp with Avocado',
    description: 'Fresh grilled prawns seasoned with garlic, herbs, and served with sliced ripe island avocado.',
    price: 'Rp 75,000',
    priceNum: 75000,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1559742811-824132a5cbe0?auto=format&fit=crop&q=80&w=600',
    tags: ["Chef's Special"]
  },
  {
    id: 'app2',
    name: 'Ceviche',
    description: 'Chilled local white fish cured in fresh lime juice, tossed with red onions, chili, and fresh coriander.',
    price: 'Rp 75,000',
    priceNum: 75000,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600',
    tags: ['Signature']
  },
  {
    id: 'app3',
    name: 'Grilled Baby Romaine',
    description: 'Lightly charred baby romaine lettuce drizzled with house dressing and topped with parmesan.',
    price: 'Rp 75,000',
    priceNum: 75000,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian']
  },
  {
    id: 'app4',
    name: 'Crispy Calamary',
    description: 'Golden-fried local squid rings served with a side of delicious garlic aioli and fresh lime.',
    price: 'Rp 65,000',
    priceNum: 65000,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'app5',
    name: 'Chili Garlic Edamame',
    description: 'Steamed young soybeans tossed in a spicy chili garlic glaze.',
    price: 'Rp 60,000',
    priceNum: 60000,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian', 'Vegan', 'Spicy']
  },

  // 2. BREAD & DIP
  {
    id: 'bd1',
    name: 'Hummus',
    description: 'Creamy chickpea puree blended with tahini, olive oil, garlic, and served with warm flatbread.',
    price: 'Rp 70,000',
    priceNum: 70000,
    category: 'Bread & Dip',
    image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian', 'Vegan']
  },
  {
    id: 'bd2',
    name: 'Tzatziki',
    description: 'Refreshing Greek yogurt dip with cucumber, garlic, dill, olive oil, served with flatbread.',
    price: 'Rp 65,000',
    priceNum: 65000,
    category: 'Bread & Dip',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian']
  },
  {
    id: 'bd3',
    name: 'Trio Dip Platter',
    description: 'A beautiful selection of Hummus, Tzatziki, and seasonal dip served with a generous basket of toasted bread.',
    price: 'Rp 85,000',
    priceNum: 85000,
    category: 'Bread & Dip',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian', 'Signature']
  },

  // 3. SALADS
  {
    id: 'sal1',
    name: 'Chicken Caesar Salad',
    description: 'Crisp romaine lettuce, grilled chicken breast, herb croutons, and shaved parmesan, tossed in Caesar dressing.',
    price: 'Rp 90,000',
    priceNum: 90000,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'sal2',
    name: 'Beet Feta Salad',
    description: 'Roasted red beets, creamy feta cheese, mixed greens, toasted walnuts, and a light balsamic vinaigrette.',
    price: 'Rp 90,000',
    priceNum: 90000,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'sal3',
    name: 'Grilled Baby Romaine Salad',
    description: 'Charred romaine hearts, cherry tomatoes, cucumbers, mixed seeds, dressed with garlic-herb vinaigrette.',
    price: 'Rp 90,000',
    priceNum: 90000,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian']
  },

  // 4. INDONESIAN FAVORITES
  {
    id: 'ind1',
    name: 'Chicken Nasi Goreng',
    description: 'Indonesian classic wok-fried rice served with fried chicken, chicken sate, fried egg, krupuk, and fresh sambal. Vegetarian option available.',
    price: 'Rp 80,000',
    priceNum: 80000,
    category: 'Indonesian Favorites',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&q=80&w=600',
    tags: ['Signature']
  },
  {
    id: 'ind2',
    name: 'Chicken Mie Goreng',
    description: 'Stir-fried yellow noodles with vegetables, chicken, egg, and traditional sweet-savory spices. Vegetarian option available.',
    price: 'Rp 80,000',
    priceNum: 80000,
    category: 'Indonesian Favorites',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'ind3',
    name: 'Beef Rendang',
    description: 'Tender beef slow-cooked for hours in coconut milk and rich traditional spices, served with warm jasmine rice.',
    price: 'Rp 110,000',
    priceNum: 110000,
    category: 'Indonesian Favorites',
    image: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&q=80&w=600',
    tags: ["Chef's Special", 'Spicy']
  },
  {
    id: 'ind4',
    name: 'Chicken Curry',
    description: 'Aromatic Indonesian yellow curry cooked with tender chicken, potatoes, and spices. Served with rice. Vegetarian option available.',
    price: 'Rp 85,000',
    priceNum: 85000,
    category: 'Indonesian Favorites',
    image: 'https://images.unsplash.com/photo-1631291411348-24a67deebd7e?auto=format&fit=crop&q=80&w=600',
  },

  // 5. BREAKFAST
  {
    id: 'brk1',
    name: 'Blueberry Pancake Tower',
    description: 'Fluffy pancake stack layered with fresh blueberries, served with rich maple syrup and cream.',
    price: 'Rp 75,000',
    priceNum: 75000,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian']
  },
  {
    id: 'brk2',
    name: 'Smoothie Bowl',
    description: 'Tropical red dragon fruit and banana smoothie base, topped with fresh mango, granola, coconut, and honey.',
    price: 'Rp 80,000',
    priceNum: 80000,
    category: 'Breakfast',
    image: IMAGES.smoothieBowl,
    tags: ['Vegetarian', "Chef's Special"]
  },
  {
    id: 'brk3',
    name: 'Strawberry Parfait',
    description: 'Chilled layers of local Greek yogurt, organic strawberries, wild honey, and house-baked granola.',
    price: 'Rp 70,000',
    priceNum: 70000,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian']
  },
  {
    id: 'brk4',
    name: 'Cinnamon Banana Oats Porridge',
    description: 'Creamy hot rolled oats cooked with coconut milk, topped with sliced banana, cinnamon, and organic maple syrup.',
    price: 'Rp 75,000',
    priceNum: 75000,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1517686469429-8faf88b9f7cf?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian', 'Vegan']
  },
  {
    id: 'brk5',
    name: 'Vanilla Berry Oats Porridge',
    description: 'Warm rolled oats infused with natural vanilla bean, topped with mixed forest berries and island honey.',
    price: 'Rp 75,000',
    priceNum: 75000,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1536304997881-a372c179924b?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian']
  },
  {
    id: 'brk6',
    name: 'BEAT (Bacon Egg Avo Tomato)',
    description: 'Pan-fried crispy bacon, sunny-side-up egg, sliced avocado, and grilled tomato on sourdough.',
    price: 'Rp 85,000',
    priceNum: 85000,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600',
    tags: ['Signature']
  },
  {
    id: 'brk7',
    name: 'Eggs Benedict',
    description: 'Poached organic eggs on toasted sourdough, premium ham, dressed in silky hollandaise. Bacon (+20k) or Smoked Salmon (+30k) options available.',
    price: 'Rp 80,000',
    priceNum: 80000,
    category: 'Breakfast',
    image: IMAGES.croissant,
  },
  {
    id: 'brk8',
    name: 'The Vegan Breakfast',
    description: 'Grilled herb mushrooms, roasted tomatoes, crushed avocado, spinach, and crispy tofu served on rustic sourdough.',
    price: 'Rp 75,000',
    priceNum: 75000,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1496042399014-dc73c4f2bde1?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian', 'Vegan']
  },
  {
    id: 'brk9',
    name: 'Smoked Salmon Scramble',
    description: 'Creamy soft scrambled organic eggs with layers of premium smoked salmon and chives on toasted bread.',
    price: 'Rp 85,000',
    priceNum: 85000,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=600',
  },

  // 6. GOURMET SANDWICHES
  {
    id: 'san1',
    name: 'Cranberry Chicken Sandwich',
    description: 'Tender pulled chicken mixed with sweet cranberries, toasted walnuts, celery, and light mayo on your choice of Sourdough or Focaccia. Add Fries (+40K).',
    price: 'Rp 85,000',
    priceNum: 85000,
    category: 'Gourmet Sandwiches',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'san2',
    name: 'Classic Italian Sandwich',
    description: 'Premium cured meats, fresh mozzarella, lettuce, vine tomato, basil pesto, and dark balsamic glaze. Choice of Sourdough or Focaccia. Add Fries (+40K).',
    price: 'Rp 95,000',
    priceNum: 95000,
    category: 'Gourmet Sandwiches',
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=600',
    tags: ['Signature']
  },
  {
    id: 'san3',
    name: 'Bacon Apple Grilled Cheese',
    description: 'Crisp artisan bacon, sweet sliced apples, and melted premium sharp cheddar pressed on freshly baked bread. Add Fries (+40K).',
    price: 'Rp 90,000',
    priceNum: 90000,
    category: 'Gourmet Sandwiches',
    image: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'san4',
    name: 'Blackberry Feta Grilled Cheese',
    description: 'Wild sweet blackberries, fresh crumbled feta cheese, and mozzarella pressed inside golden bread. Add Fries (+40K).',
    price: 'Rp 95,000',
    priceNum: 95000,
    category: 'Gourmet Sandwiches',
    image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18a67d?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian', "Chef's Special"]
  },
  {
    id: 'san5',
    name: 'Tangy BBQ Chicken Sandwich',
    description: 'Succulent chicken breast tossed in sticky, smokey BBQ sauce with pickled onion and crisp lettuce. Choice of Sourdough or Focaccia. Add Fries (+40K).',
    price: 'Rp 85,000',
    priceNum: 85000,
    category: 'Gourmet Sandwiches',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'san6',
    name: 'Sundried Tomato Feta Sandwich',
    description: 'Sun-dried tomatoes, robust Greek feta crumble, arugula, and olive tapenade pressed on fresh focaccia or sourdough. Add Fries (+40K).',
    price: 'Rp 95,000',
    priceNum: 95000,
    category: 'Gourmet Sandwiches',
    image: 'https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian']
  },
  {
    id: 'san7',
    name: 'Grilled Chicken Pesto Sandwich',
    description: 'Juicy grilled chicken, melted mozzarella, fresh basil pesto, and sliced tomato on sourdough or focaccia. Add Fries (+40K).',
    price: 'Rp 95,000',
    priceNum: 95000,
    category: 'Gourmet Sandwiches',
    image: 'https://images.unsplash.com/photo-1567234669013-216e58419612?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'san8',
    name: 'Crispy Chicken Burger',
    description: 'Thick buttermilk-fried chicken thigh, creamy coleslaw, pickles, and chef s special house burger sauce on brioche. Served with fries.',
    price: 'Rp 95,000',
    priceNum: 95000,
    category: 'Gourmet Sandwiches',
    image: IMAGES.burger,
  },
  {
    id: 'san9',
    name: 'Gourmet Beef Burger',
    description: 'Juicy grilled prime beef patty, melted cheddar, lettuce, fresh tomato, caramelized onions, and burger sauce. Served with fries.',
    price: 'Rp 95,000',
    priceNum: 95000,
    category: 'Gourmet Sandwiches',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
  },

  // 7. MAIN DISHES
  {
    id: 'main1',
    name: 'Linguine Your Way',
    description: 'Elegant linguine pasta prepared with your choice of authentic marinara, creamy alfredo, or fresh basil pesto.',
    price: 'Rp 85,000',
    priceNum: 85000,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian']
  },
  {
    id: 'main2',
    name: 'Butter Garlic Prawn Pasta',
    description: 'Succulent ocean tiger prawns sautéed in hot garlic-infused butter, tosssed with fine spaghetti and fresh parsley.',
    price: 'Rp 95,000',
    priceNum: 95000,
    category: 'Main Dishes',
    image: IMAGES.pasta,
    tags: ['Signature']
  },
  {
    id: 'main3',
    name: 'Thai Chicken Chili Rice Noodle',
    description: 'Stir-fried authentic flat rice noodles with chili, tender chicken pieces, bell peppers, and fresh holy basil.',
    price: 'Rp 90,000',
    priceNum: 90000,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=600',
    tags: ['Spicy']
  },
  {
    id: 'main4',
    name: 'Slow-Braised Soy-Glazed Pork Ribs',
    description: 'Fall-off-the-bone tender pork ribs glazed in sweet savory soy-ginger reduction, served with roasted potatoes.',
    price: 'Rp 130,000',
    priceNum: 130000,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
    tags: ["Chef's Special"]
  },
  {
    id: 'main5',
    name: 'Grilled Barramundi',
    description: 'Pan-grilled fresh local barramundi fillet served over a bed of baby green beans, potatoes, and garlic butter sauce.',
    price: 'Rp 95,000',
    priceNum: 95000,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'main6',
    name: 'Sirloin Steak',
    description: '180g imported tender prime sirloin steak grilled to perfection, served with garlic potatoes and black pepper sauce.',
    price: 'Rp 140,000',
    priceNum: 140000,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'main7',
    name: 'Tenderloin Steak',
    description: 'Premium 180g melt-in-your-mouth beef tenderloin steak served with roasted veggies and rich red wine reduction.',
    price: 'Rp 160,000',
    priceNum: 160000,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=600',
    tags: ['Premium']
  },
  {
    id: 'main8',
    name: 'Velvety Panang Beef Curry',
    description: 'Traditional slow-simmered rich Thai Panang curry paste with beef, coconut cream, and fresh kaffir lime leaves.',
    price: 'Rp 95,000',
    priceNum: 95000,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=600',
    tags: ['Spicy']
  },

  // 8. DESSERT
  {
    id: 'des1',
    name: 'Pear & Raspberry Crisp',
    description: 'Baked tender sweet pears and raspberries with a golden buttery crumble topping, served with vanilla scoop.',
    price: 'Rp 70,000',
    priceNum: 70000,
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=600',
    tags: ['Sweet']
  },
  {
    id: 'des2',
    name: 'Chocolate Tart',
    description: 'Silky, rich Belgian dark chocolate ganache set in a crisp sweet pastry shell with sea salt flakes.',
    price: 'Rp 75,000',
    priceNum: 75000,
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600',
    tags: ['Sweet', "Chef's Special"]
  },
  {
    id: 'des3',
    name: 'Peanut Butter Semifreddo',
    description: 'Indulgent semi-frozen Italian dessert blending creamy peanut butter, roasted nuts, and chocolate fudge swirls.',
    price: 'Rp 70,000',
    priceNum: 70000,
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'des4',
    name: 'Crème Brûlée',
    description: 'Rich custard base topped with a contrasting layer of hardened caramelized sugar.',
    price: 'Rp 75,000',
    priceNum: 75000,
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&q=80&w=600',
    tags: ['Sweet']
  },
  {
    id: 'des5',
    name: 'Chocolate Mousse',
    description: 'Light, airy, and intensely chocolatey whipped mousse made with 70% dark single-origin chocolate.',
    price: 'Rp 70,000',
    priceNum: 70000,
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1541795795328-f073b763494e?auto=format&fit=crop&q=80&w=600',
  },

  // 9. COFFEE
  {
    id: 'cof1',
    name: 'Single Espresso',
    description: 'Pure, robust, rich single-shot extracted from premium Balinese Arabica beans.',
    price: 'Rp 25,000',
    priceNum: 25000,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-151097252790b-af4f40d91cc3?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cof2',
    name: 'Double Espresso',
    description: 'Strong, aromatic double-shot for a bold island pick-me-up.',
    price: 'Rp 35,000',
    priceNum: 35000,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-151097252790b-af4f40d91cc3?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cof3',
    name: 'Long Black',
    description: 'Double shot of hot espresso pulled over hot pure water.',
    price: 'Rp 35,000',
    priceNum: 35000,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cof4',
    name: 'Macchiato',
    description: 'Rich espresso shot stained with a dollop of thick microfoam.',
    price: 'Rp 30,000',
    priceNum: 30000,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cof5',
    name: 'Americano',
    description: 'Espresso diluted with water. Served Hot (Rp 35K) or Iced (Rp 40K). Mild and clean.',
    price: 'Rp 35,000',
    priceNum: 35000,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cof6',
    name: 'Latte',
    description: 'Silky smooth espresso with velvety steamed milk. Hot (Rp 40K) or Iced (Rp 45K). Almond/Oat milk (+15k) and sweet syrup options available.',
    price: 'Rp 40,000',
    priceNum: 40000,
    category: 'Coffee',
    image: IMAGES.coffee,
    tags: ['Signature']
  },
  {
    id: 'cof7',
    name: 'Cappuccino',
    description: 'Traditional equal-parts ratio of espresso, steamed milk, and heavy foam. Hot (Rp 40K) or Iced (Rp 45K).',
    price: 'Rp 40,000',
    priceNum: 40000,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cof8',
    name: 'Flat White',
    description: 'Velvety microfoam folded over a double shot ristretto. Hot (Rp 40K) or Iced (Rp 45K).',
    price: 'Rp 40,000',
    priceNum: 40000,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cof9',
    name: 'Matcha Latte',
    description: 'Organic Japanese ceremonial matcha whisked with your choice of milk. Hot (Rp 40K) or Iced (Rp 45K).',
    price: 'Rp 40,000',
    priceNum: 40000,
    category: 'Coffee',
    image: IMAGES.matcha,
  },
  {
    id: 'cof10',
    name: 'Affogato',
    description: 'A scoop of creamy vanilla bean gelato drowned in a hot shot of robust espresso.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1594911774802-8822a707caff?auto=format&fit=crop&q=80&w=600',
  },

  // 10. TEA
  {
    id: 'tea1',
    name: 'Lemon Tea',
    description: 'Brewed black tea infused with fresh citrusy lemon juice. Hot (Rp 30K) or Iced (Rp 35K).',
    price: 'Rp 30,000',
    priceNum: 30000,
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'tea2',
    name: 'Pure Tea',
    description: 'Classic brewed black tea served pure. Hot (Rp 20K) or Iced (Rp 35K).',
    price: 'Rp 20,000',
    priceNum: 20000,
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'tea3',
    name: 'Iced Lychee Tea',
    description: 'Chilled sweet black tea infused with fragrant lychee syrup and whole sweet lychee fruits.',
    price: 'Rp 35,000',
    priceNum: 35000,
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=600',
    tags: ['Best Seller']
  },
  {
    id: 'tea4',
    name: 'Jasmine Tea',
    description: 'Hot aromatic green tea scented with fresh delicate jasmine blossoms.',
    price: 'Rp 40,000',
    priceNum: 40000,
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'tea5',
    name: 'Mint Tea',
    description: 'Refreshing infusion of loose tea leaves and freshly plucked organic mint leaves.',
    price: 'Rp 40,000',
    priceNum: 40000,
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600',
  },

  // 11. MORNING COCKTAILS
  {
    id: 'mct1',
    name: 'Mimosa',
    description: 'Sparkling dry wine paired with fresh, sweet, pulp-free orange juice. Perfect breakfast drink.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Morning Cocktails',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'mct2',
    name: 'Frozen Strawberry Bellini',
    description: 'Icy slush blend of sparkling prosecco and sweet local strawberries.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Morning Cocktails',
    image: 'https://images.unsplash.com/photo-1485872241439-af2583f808f2?auto=format&fit=crop&q=80&w=600',
    tags: ['Signature']
  },
  {
    id: 'mct3',
    name: 'Sangria Glass',
    description: 'Fruity red wine infused with freshly cut citrus and tropical fruits.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Morning Cocktails',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'mct4',
    name: 'Cappuccino Martini',
    description: 'Creamy double shot espresso shaken with vodka, coffee liqueur, and smooth milk foam.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Morning Cocktails',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=600',
  },

  // 12. FRESH JUICE
  {
    id: 'juc1',
    name: 'Lime Squash',
    description: 'Zesty lime juice topped with sparkling soda water over crushed ice. Highly refreshing.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Fresh Juice',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'juc2',
    name: 'Watermelon Juice',
    description: '100% freshly pressed local sweet red watermelons. No added sugar.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Fresh Juice',
    image: 'https://images.unsplash.com/photo-1504113888839-1c8003672fc4?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'juc3',
    name: 'Mango Juice',
    description: 'Thick, pulpy fresh mango nectar made from the sweetest seasonal harvests.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Fresh Juice',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'juc4',
    name: 'Orange Juice',
    description: 'Freshly squeezed sweet citrusy oranges packed with natural Vitamin C.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Fresh Juice',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'juc5',
    name: 'Carrot Juice',
    description: 'Rich, sweet, cold-pressed carrot juice. Pure vegetable goodness.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Fresh Juice',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'juc6',
    name: 'ABC Juice',
    description: 'Our super-blend of cold-pressed fresh Apple, Beetroot, and Carrot.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Fresh Juice',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    tags: ['Detox']
  },
  {
    id: 'juc7',
    name: 'Detox Juice',
    description: 'Pure cold-pressed green apple, ginger, turmeric, lemon, and a hint of cayenne pepper.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Fresh Juice',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600',
    tags: ['Detox']
  },
  {
    id: 'juc8',
    name: 'Green Juice',
    description: 'Powerhouse cold-pressed blend of cucumber, spinach, celery, parsley, and lime.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Fresh Juice',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegan']
  },

  // 13. MILK SHAKES
  {
    id: 'shk1',
    name: 'Strawberry Milk Shake',
    description: 'Creamy thick shake made with local strawberries and premium vanilla bean ice cream.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Milk Shakes',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'shk2',
    name: 'Banana Milk Shake',
    description: 'Smooth, rich blend of sweet local bananas, cream, milk, and a dash of cinnamon.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Milk Shakes',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'shk3',
    name: 'Chocolate Milk Shake',
    description: 'Rich Belgian chocolate sauce blended with vanilla ice cream and whole milk.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Milk Shakes',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600',
  },

  // 14. SMOOTHIES
  {
    id: 'smo1',
    name: 'Strawberry Banana Smoothie',
    description: 'A creamy blend of frozen strawberries, local bananas, fresh yogurt, and island honey.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Smoothies',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'smo2',
    name: 'Mango Strawberry Smoothie',
    description: 'Vibrant, thick tropical mix of ripe mangoes and local fresh strawberries.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Smoothies',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600',
  },

  // 15. MINERAL WATER
  {
    id: 'wat1',
    name: 'Still Water (330ml Glass Bottle)',
    description: 'Chilled premium still mineral water served in an elegant eco-friendly glass bottle.',
    price: 'Rp 40,000',
    priceNum: 40000,
    category: 'Mineral Water',
    image: 'https://images.unsplash.com/photo-1608885898957-a599fb18de3e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'wat2',
    name: 'Sparkling Water (330ml Glass Bottle)',
    description: 'Chilled bubbly sparkling mineral water in a glass bottle, served with lemon slices.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Mineral Water',
    image: 'https://images.unsplash.com/photo-1548858850-d99fb18de3e?auto=format&fit=crop&q=80&w=600',
  },

  // 16. SOFT DRINKS
  {
    id: 'sof1',
    name: 'Coca-Cola',
    description: 'Classic ice-cold Coca-Cola served with a lime wedge.',
    price: 'Rp 40,000',
    priceNum: 40000,
    category: 'Soft Drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'sof2',
    name: 'Sprite',
    description: 'Crisp lemon-lime soda served ice-cold.',
    price: 'Rp 40,000',
    priceNum: 40000,
    category: 'Soft Drinks',
    image: 'https://images.unsplash.com/photo-1625772298000-058dfc9d2a6a?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'sof3',
    name: 'Coke Zero',
    description: 'Great Coca-Cola taste with zero sugar.',
    price: 'Rp 40,000',
    priceNum: 40000,
    category: 'Soft Drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'sof4',
    name: 'Soda Water',
    description: 'Carbonated water, crisp and fizzy.',
    price: 'Rp 40,000',
    priceNum: 40000,
    category: 'Soft Drinks',
    image: 'https://images.unsplash.com/photo-1608885898957-a599fb18de3e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'sof5',
    name: 'Tonic Water',
    description: 'Crisp carbonated tonic water, ideal refresh.',
    price: 'Rp 40,000',
    priceNum: 40000,
    category: 'Soft Drinks',
    image: 'https://images.unsplash.com/photo-1608885898957-a599fb18de3e?auto=format&fit=crop&q=80&w=600',
  },

  // 17. BEER
  {
    id: 'ber1',
    name: 'Small Bintang',
    description: 'The iconic Indonesian Pilsner beer, light and crisp (330ml).',
    price: 'Rp 40,000',
    priceNum: 40000,
    category: 'Beer',
    image: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'ber2',
    name: 'Large Bintang',
    description: 'The large sharing size of the legendary Bintang pilsner (620ml).',
    price: 'Rp 60,000',
    priceNum: 60000,
    category: 'Beer',
    image: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'ber3',
    name: 'Small Bintang Bucket (5 Bottles)',
    description: 'Get five ice-cold small Bintang bottles in a metal bucket. Perfect for groups.',
    price: 'Rp 190,000',
    priceNum: 190000,
    category: 'Beer',
    image: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&q=80&w=600',
    tags: ['Signature']
  },
  {
    id: 'ber4',
    name: 'San Miguel Light',
    description: 'A light, crisp Filipino-style lager with low calories.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Beer',
    image: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'ber5',
    name: 'San Miguel Pale Pilsener',
    description: 'The classic smooth pale pilsner by San Miguel.',
    price: 'Rp 45,000',
    priceNum: 45000,
    category: 'Beer',
    image: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'ber6',
    name: 'San Miguel Bucket (5 Bottles)',
    description: 'Get five ice-cold San Miguel (Light or Pale) bottles in a metal sharing bucket.',
    price: 'Rp 215,000',
    priceNum: 215000,
    category: 'Beer',
    image: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&q=80&w=600',
  },

  // 18. COCKTAILS
  {
    id: 'cok1',
    name: 'Frozen Aperol',
    description: 'A frosty, slushy, ice-cold blend of Aperol, orange citrus, and Prosecco.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600',
    tags: ['Signature']
  },
  {
    id: 'cok2',
    name: 'Aperol Spritz',
    description: 'The absolute classic: Aperol, dry prosecco, soda water, and a slice of fresh orange.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cok3',
    name: 'Penida Sunset',
    description: 'Vibrant house special layered with dark rum, tropical mango, pineapple, and grenadine.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=600',
    tags: ["Chef's Special"]
  },
  {
    id: 'cok4',
    name: 'Jungle Street',
    description: 'An exotic mix of gin, fresh passionfruit, crushed mint leaves, and tonic.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cok5',
    name: 'Gin Splash',
    description: 'A crisp combination of gin, fresh cucumber juice, tonic, and rosemary.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cok6',
    name: 'Tommy\'s Margarita',
    description: 'Smooth reposado tequila, fresh lime juice, organic agave nectar, served on the rocks.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cok7',
    name: 'Long Island Iced Tea',
    description: 'Five premium white spirits shaken together with sweet citrus and topped with a splash of cola.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cok8',
    name: 'Pineapple Punch',
    description: 'Sweet white rum shaken with fresh pineapple juice, coconut water, and lime.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cok9',
    name: 'Lychee Martini',
    description: 'Fragrant vodka martini infused with sweet lychee juice and served with fresh whole lychees.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cok10',
    name: 'Espresso Martini',
    description: 'Double shot of house-roasted espresso shaken with premium vodka and dark coffee liqueur.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cok11',
    name: 'Coconut Mojito',
    description: 'White rum muddled with fresh mint, lime, organic cane sugar, and loaded with chilled coconut water.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cok12',
    name: 'Classic Negroni',
    description: 'Equal parts gin, sweet vermouth, and bitter Campari, stirred over ice with an orange peel.',
    price: 'Rp 120,000',
    priceNum: 120000,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cok13',
    name: 'Sangria Pitcher',
    description: 'Generous sharing pitcher (approx 4-5 glasses) of our signature fruit-infused red wine sangria.',
    price: 'Rp 550,000',
    priceNum: 550000,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=600',
  },

  // 19. WINE
  {
    id: 'win1',
    name: 'Two Islands Grenache',
    description: 'Light, fruity, and highly aromatic local Balinese red wine. Glass: Rp 90K / Bottle: Rp 450K.',
    price: 'Rp 90,000',
    priceNum: 90000,
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'win2',
    name: 'Two Islands Shiraz',
    description: 'Medium-bodied local red wine featuring dark berry notes and spicy oak. Glass: Rp 90K / Bottle: Rp 450K.',
    price: 'Rp 90,000',
    priceNum: 90000,
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'win3',
    name: 'Two Islands Rosé',
    description: 'Crisp, dry, and strawberry-scented local rose, perfect for hot days. Glass: Rp 90K / Bottle: Rp 450K.',
    price: 'Rp 90,000',
    priceNum: 90000,
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'win4',
    name: 'Plaga Sauvignon Blanc',
    description: 'Fruity and fresh tropical white wine crafted locally. Glass: Rp 90K / Bottle: Rp 450K.',
    price: 'Rp 90,000',
    priceNum: 90000,
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'win5',
    name: 'Two Islands Riesling',
    description: 'Off-dry and crisp white wine with citrus blossom aromas. Glass: Rp 90K / Bottle: Rp 450K.',
    price: 'Rp 90,000',
    priceNum: 90000,
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'win6',
    name: 'Two Islands Pinot Grigio',
    description: 'Crisp, light white wine with green apple and pear characteristics. Glass: Rp 90K / Bottle: Rp 450K.',
    price: 'Rp 90,000',
    priceNum: 90000,
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'win7',
    name: 'Two Islands Chardonnay',
    description: 'Oak-tinged, buttery, and vanilla-infused local white wine. Glass: Rp 90K / Bottle: Rp 450K.',
    price: 'Rp 90,000',
    priceNum: 90000,
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'win8',
    name: 'Beringer Chardonnay (Imported)',
    description: 'Premium imported Californian white wine with lush fruit notes. Glass: Rp 135K / Bottle: Rp 600K.',
    price: 'Rp 135,000',
    priceNum: 135000,
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
    tags: ['Premium']
  },
  {
    id: 'win9',
    name: 'Beringer Sauvignon Blanc (Imported)',
    description: 'Premium imported white wine featuring dry grass and grapefruit crispness. Glass: Rp 135K / Bottle: Rp 600K.',
    price: 'Rp 135,000',
    priceNum: 135000,
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
    tags: ['Premium']
  },
  {
    id: 'win10',
    name: 'Beringer Zinfandel Rosé (Imported)',
    description: 'Imported crisp, sweet rose with fragrant strawberry accents. Glass: Rp 135K / Bottle: Rp 600K.',
    price: 'Rp 135,000',
    priceNum: 135000,
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
    tags: ['Premium']
  },
  {
    id: 'win11',
    name: 'Beringer Malbec (Imported)',
    description: 'Deep, structured imported red wine with robust berry flavors. Glass: Rp 135K / Bottle: Rp 600K.',
    price: 'Rp 135,000',
    priceNum: 135000,
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
    tags: ['Premium']
  }
];

export const SPECIALS: MenuItem[] = [
  MENU_ITEMS[0],  // Garlic Shrimp with Avocado
  MENU_ITEMS[11], // Chicken Nasi Goreng
  MENU_ITEMS[16], // Smoothie Bowl
  MENU_ITEMS[36]  // Butter Garlic Prawn Pasta
];

export const TESTIMONIALS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah Jenkins',
    rating: 5,
    comment: 'The absolute best coffee on Nusa Penida! We stayed in Ped village and came to Alily every single morning. The Iced Coconut Latte is to die for, and the staff are incredibly friendly and warm. The vibe is so relaxing, perfect for planning your day on the island.',
    avatar: IMAGES.avatar1,
    date: '1 week ago',
    role: 'Digital Nomad, Australia'
  },
  {
    id: 'r2',
    author: 'Budi Santoso',
    rating: 5,
    comment: 'Nasi Goreng mewahnya luar biasa! Presentasinya sangat premium, porsinya besar dengan sate ayam dan udang besar. Tempatnya sangat aesthetic, minimalis modern tapi berasa tropis Bali banget. Pelayanan sangat cepat dan ramah.',
    avatar: IMAGES.avatar2,
    date: '3 days ago',
    role: 'Domestic Tourist, Jakarta'
  },
  {
    id: 'r3',
    author: 'Michael van der Berg',
    rating: 5,
    comment: 'A true oasis of calm. Beautiful modern interior design, excellent stable high-speed Wi-Fi (a nomad’s dream here), and their Alily Sunshine Bowl is both gorgeous and delicious. Highly recommend stopping here after snorkeling at Toyapakeh or exploring Ped.',
    avatar: IMAGES.avatar3,
    date: '2 weeks ago',
    role: 'Travel Blogger, Netherlands'
  }
];

export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    id: 'a1',
    name: 'Toyapakeh Harbour',
    distance: '3 mins away',
    description: 'The main gateway to Nusa Penida and prime snorkeling spot famous for vibrant coral gardens and drift diving.',
    image: IMAGES.toyapakeh
  },
  {
    id: 'a2',
    name: 'Crystal Bay Beach',
    distance: '15 mins away',
    description: 'A beautiful crescent-shaped sand bay bordered by coco palms, known for amazing sunsets and crystal clear diving.',
    image: IMAGES.crystalBay
  },
  {
    id: 'a3',
    name: 'Broken Beach (Pasih Uug)',
    distance: '35 mins away',
    description: 'A dramatic coastal formation with a massive natural arch over turquoise waters, creating a breathtaking circular bay.',
    image: IMAGES.brokenBeach
  },
  {
    id: 'a4',
    name: 'Angel\'s Billabong',
    distance: '35 mins away',
    description: 'A crystal-clear natural infinity pool formed on coastal rocks, offering a dramatic view of the Indian Ocean.',
    image: IMAGES.angelsBillabong
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'p1',
    title: 'Top 10 Things to Do in Nusa Penida',
    slug: 'top-10-things-to-do-nusa-penida',
    excerpt: 'Planning your trip to Nusa Penida? From breathtaking cliff vistas to magical marine life, here are the absolute top 10 experiences you cannot miss.',
    content: `Nusa Penida is a rugged, tropical paradise located just off the southeastern coast of Bali. For years, it remained relatively untouched, but today it is one of the most sought-after destinations in Indonesia. 

Whether you are a solo backpacker, a digital nomad, or traveling with family, here are the top 10 things you must add to your Nusa Penida itinerary:

### 1. Stand atop Kelingking T-Rex Cliff
Arguably the most famous viewpoint in Southeast Asia, the cliff at Kelingking Beach resembles a massive Tyrannosaurus Rex extending into the ocean. The climb down to the beach is steep and rocky, but the views from the top are accessible to all.

### 2. Snorkel with Giant Manta Rays
Nusa Penida is one of the few places in the world where you can snorkel with reef manta rays year-round. Head to Manta Point or Crystal Bay to watch these gentle giants glide effortlessly through the water.

### 3. Cool Down at Crystal Bay
Crystal Bay is the ultimate sunset beach. It features soft sand, towering coconut palms, and crystal-clear calm waters, making it perfect for swimming and sunbathing.

### 4. Witness the Arch at Broken Beach
Broken Beach, or *Pasih Uug*, is an incredible geological phenomenon where a massive natural stone arch forms a bridge over turquoise waters, letting the tide flow in and out of a circular sea basin.

### 5. Take a Dip in Angel’s Billabong
Located right next to Broken Beach, Angel's Billabong is a stunning natural emerald rock pool that fills with seawater at high tide. It looks like a luxury infinity pool overlooking the roaring Indian Ocean!

### 6. Explore Diamond Beach & Atuh Beach
Located on the eastern coast, Diamond Beach features a spectacular stairway carved right into the limestone cliff side, leading down to pristine white sands and diamond-shaped limestone spires.

### 7. Trek to Peguyangan Waterfall
Peguyangan is more of a sacred pilgrimage than a waterfall. You will descend 700 bright blue metal steps down the edge of a sheer cliff to find a sacred Balinese water temple and natural pools right at the ocean's edge.

### 8. Visit Goa Giri Putri Cave Temple
Enter through a tiny crevice in a mountain to discover a massive, 300-meter-long subterranean Hindu temple. It is an incredibly spiritual, mystical experience with monks chanting and incense smoke filling the dark chambers.

### 9. Dive into Toyapakeh Coral Gardens
Toyapakeh is renowned for its rich marine biodiversity, featuring healthy hard and soft coral fields, schools of tropical fish, and occasionally the giant oceanic sunfish (Mola Mola).

### 10. Unwind at Alily Penida Cafe
After a long day of bumping along the island's winding roads, treat yourself to premium handcrafted coffee and fresh organic food in the stylish, cozy tropical oasis of Alily Penida in Ped village.

### Travel Tips:
* **Transport**: Renting a scooter is the most flexible option but roads can be bumpy. For comfort, hire a private driver.
* **Cash is King**: Ensure you have plenty of Indonesian Rupiah (IDR) cash, as ATMs on the island can occasionally run out of cash or lose connection.
* **Stay Safe**: Always respect ocean currents, especially at Kelingking and Angel's Billabong.`,
    category: 'Nusa Penida Guide',
    image: IMAGES.blogNusaPenida,
    readTime: '6 min read',
    author: {
      name: 'Wayan Arta',
      avatar: IMAGES.avatarChef,
      role: 'Local Guide & Culinary Lead'
    },
    date: 'June 28, 2026',
    tags: ['Travel', 'Adventure', 'Bali Guide'],
    comments: [
      {
        id: 'c1',
        author: 'Jessica Miller',
        avatar: IMAGES.avatar1,
        date: 'June 29, 2026',
        content: 'This guide was extremely helpful! We rented a driver as you suggested and it made our cliff tours so much more comfortable.'
      }
    ]
  },
  {
    id: 'p2',
    title: 'Best Coffee Spots in Nusa Penida',
    slug: 'best-coffee-spots-nusa-penida',
    excerpt: 'An insider guide to finding specialty grade espresso, cold brews, and premium barista culture in Nusa Penida.',
    content: `A few years ago, finding a high-quality espresso on Nusa Penida was almost impossible. Travelers had to settle for standard instant coffee. However, as the island has evolved into a hub for digital nomads and global travelers, a vibrant specialty coffee culture has blossomed.

Here is a guide to what makes a truly great cup of coffee on the island and where you should go to find it:

### The Blend: Balinese Kintamani meets Flores Arabica
The volcanic soil of Bali’s Kintamani highlands produces beans with distinctive citrusy, fruity, and light-bodied profiles. When roasted locally and blended with the earthy, full-bodied beans of neighboring Flores, it creates a perfectly balanced espresso: bright, aromatic, and deeply satisfying.

### Barista Craftsmanship in the Jungle
Coffee is more than just caffeine; it is a craft. At **Alily Penida**, our baristas treat milk steaming like an art form. Using high-grade espresso machines, they dial in the grind multiple times a day to account for the tropical humidity, ensuring a perfect extraction every single time.

### The Magic of Coconut Milk
For a true taste of Bali, try substituting dairy milk with fresh, organic coconut milk. Unlike canned alternatives, fresh-pressed coconut milk is light, subtle, and natural. When paired with a double espresso over ice, it creates a creamy, refreshing tropical beverage that will power your island explorations.

### Tips for Coffee Enthusiasts in Nusa Penida:
1. **Drink Fresh**: Beans oxidize rapidly in tropical humidity. Always ask if your coffee shop uses beans roasted within the last 4 weeks.
2. **Nomad Friendly**: Look for spots with air-conditioned spaces, stable backup generators, and charging outlets. Alily Penida provides high-speed fiber internet and quiet workspace tables.
3. **Bring a Reusable Cup**: Help preserve Nusa Penida’s beautiful environment by bringing your own travel tumbler for a discount!`,
    category: 'Coffee',
    image: IMAGES.blogCoffee,
    readTime: '4 min read',
    author: {
      name: 'Kadek Sudi',
      avatar: IMAGES.avatarBarista,
      role: 'Head Barista'
    },
    date: 'June 24, 2026',
    tags: ['Barista', 'Specialty Coffee', 'Digital Nomad'],
    comments: []
  },
  {
    id: 'p3',
    title: 'Why Fresh Ingredients Matter',
    slug: 'why-fresh-ingredients-matter',
    excerpt: 'How sourcing local, fresh ingredients from Bali farms elevates tropical gastronomy and supports local farming communities.',
    content: `At **Alily Penida**, our culinary philosophy is simple: let the ingredients speak for themselves. In tropical dining, fresh ingredients are not just a luxury—they are the core of flavor and vitality.

Here is why sourcing local and choosing ultra-fresh ingredients transforms every meal into a culinary journey:

### Sourcing Direct from Balinese Farmers
Instead of relying on heavily frozen imports that travel thousands of miles, we collaborate directly with local Balinese farming cooperatives in Bedugul and Kintamani. This means our tomatoes are sun-ripened on the vine, our avocados are picked at the perfect moment of creaminess, and our herbs are harvested at dawn to be served in our dishes by noon.

### Protecting Nutrient Integrity
Did you know that fruits and vegetables lose up to 50% of their nutrient value within a week of harvest? By sourcing locally, we preserve vital vitamins, active enzymes, and antioxidants in our famous **Alily Sunshine Bowls** and fresh cold-pressed juices. You can literally taste the energy and freshness in every single bite.

### Supporting Island Sustainability
Sourcing locally dramatically reduces food miles, which translates to a significantly lower carbon footprint. Furthermore, keeping our supply chains within Bali ensures that tourist spending directly supports local farming families, fostering sustainable community development on the island.

### The Sambal Matah Standard
Our signature fresh Balinese condiment—*Sambal Matah*—is a perfect testament to this philosophy. It consists of raw sliced shallots, lemongrass, chili, kaffir lime leaves, and warm coconut oil. Because it is completely raw and freshly sliced to order, the texture must be crunchy and the aroma sharp. There is zero room for stale ingredients!

Next time you enjoy a meal at Alily, remember that you are tasting the rich volcanic soils, the ocean breeze, and the hard work of Balinese farmers.`,
    category: 'Food',
    image: IMAGES.blogIngredients,
    readTime: '4 min read',
    author: {
      name: 'Wayan Arta',
      avatar: IMAGES.avatarChef,
      role: 'Local Guide & Culinary Lead'
    },
    date: 'June 18, 2026',
    tags: ['Healthy Food', 'Sustainable Sourcing', 'Balinese Cuisine'],
    comments: []
  },
  {
    id: 'p4',
    title: 'Our Favorite Sunset Spots',
    slug: 'our-favorite-sunset-spots',
    excerpt: 'Beyond Crystal Bay: discovering secret cliff viewpoints and serene beaches to watch the Bali sunset in Nusa Penida.',
    content: `Nusa Penida offers some of the most dramatic coastal geography in Indonesia, meaning the sunsets here are absolutely spectacular. While almost everyone gathers at Crystal Bay, there are several lesser-known spots that offer breathtaking sunset vistas.

Here are our top secret sunset spots in Nusa Penida:

### 1. Amok Sunset Cliff
Located high on a ridge overlooking the Nusa Ceningan Channel, this cliffside pool lounge offers standard luxury sunset views with active DJ music, cozy bamboo structures, and an incredible vantage point to watch the sun slip behind Mount Agung.

### 2. Ped Beach Seafront (A Walk from Alily!)
You don't need to drive far to experience magic. Right across the road from **Alily Penida**, the calm beach in Ped village offers a stunning panoramic view of the Bali Strait. As the sun sets, Mount Agung on the mainland is backlit with striking shades of pink, gold, and purple, reflecting beautifully over the gentle tides.

### 3. Saren Cliff Point
For a wild, dramatic, and completely uncrowded sunset, Saren Cliff Point on the southwest coast is unmatched. Watch giant Indian Ocean waves crash against 200-meter sheer limestone cliffs as the sky burns in fiery orange hues.

### 4. Banah Cliff Sunset
Banah Cliff features a spectacular arch rock out in the ocean. Sitting quietly on the grass cliff edge here at dusk, listening to the roar of the sea below, is a deeply meditative and unforgettable experience.`,
    category: 'Travel Tips',
    image: IMAGES.blogSunset,
    readTime: '3 min read',
    author: {
      name: 'Wayan Arta',
      avatar: IMAGES.avatarChef,
      role: 'Local Guide & Culinary Lead'
    },
    date: 'June 12, 2026',
    tags: ['Sunset', 'Romantic', 'Cliffs'],
    comments: []
  },
  {
    id: 'p5',
    title: 'Travel Guide to Ped Village',
    slug: 'travel-guide-to-ped-village',
    excerpt: 'Explore Ped, the charming cultural and coastal heart of northern Nusa Penida. Discover where to stay, eat, and explore.',
    content: `While many tourists rush straight to the cliffs of Kelingking or Diamond Beach, the peaceful northern coastline of Nusa Penida remains the cultural and lifestyle heart of the island. At the center of this coastal strip lies **Ped Village**, a charming destination that perfectly balances laid-back traveler vibes with authentic Balinese daily life.

Here is your complete guide to exploring, staying, and dining in Ped:

### Why Choose Ped as Your Base?
1. **Convenience**: Ped is located just 10 minutes from both Toyapakeh Harbour and Sampalan Harbour. This means you can drop your luggage and start exploring immediately.
2. **Paved Roads**: The northern ring road through Ped is beautifully paved, smooth, and flat, offering a relaxing scooter ride compared to the bumpy interior roads.
3. **Dining Capital**: Ped hosts the finest culinary selection on the island, with beautiful beachfront bars, cozy local warungs, and modern tropical cafes like Alily Penida.

### Key Highlights in Ped:
* **Pura Penataran Ped**: One of Bali’s most spiritually significant Hindu temples, visited by thousands of pilgrims from across Indonesia. Its towering red-brick gates and sacred Banyan trees are deeply mystical.
* **Calm Reef Swimming**: Unlike the wild southern beaches, the coast of Ped is protected by a shallow coral reef, creating calm, flat waters perfect for swimming and paddle boarding.
* **Nomad Workspace**: Thanks to subsea fiber cables, Ped enjoys the fastest and most reliable internet on Nusa Penida, making it the perfect hub for digital nomads.

### Where to Eat: Alily Penida
Stop by **Alily Penida** for your morning espresso, use our quiet workspace tables during the day, and enjoy our handmade wood-fired fusion pizzas as the ocean breeze cools down the village in the evening.`,
    category: 'Nusa Penida Guide',
    image: IMAGES.blogPedVillage,
    readTime: '5 min read',
    author: {
      name: 'Kadek Sudi',
      avatar: IMAGES.avatarBarista,
      role: 'Head Barista'
    },
    date: 'June 05, 2026',
    tags: ['Local Culture', 'Travel Guide', 'Ped Village'],
    comments: []
  },
  {
    id: 'p6',
    title: 'Healthy Breakfast Ideas Before Exploring',
    slug: 'healthy-breakfast-ideas-before-exploring-nusa-penida',
    excerpt: 'Fuel your active day of trekking and snorkeling with high-energy, nutrient-dense breakfast ideas that won’t weigh you down.',
    content: `A day trip around Nusa Penida is an athletic endeavor. You will climb hundreds of high steps at Kelingking or Peguyangan, snorkel against currents at Manta Bay, and walk along sunny coastlines. To survive—and enjoy—this adventure, your body needs premium fuel.

Here is what you should eat for breakfast before starting your island explorations:

### The Golden Rule: Complex Carbs & Hydration
Avoid heavy, greasy, deep-fried breakfast items that drain your energy and make you feel sluggish in the tropical heat. Instead, focus on a combination of **complex carbohydrates** for sustained energy release, **lean proteins** for muscle support, and **natural electrolytes** for hydration.

### The Power Breakfast: Acai & Dragonfruit Bowls
Smoothie bowls, like our **Alily Sunshine Bowl**, are the ultimate pre-adventure fuel. Sliced local bananas and organic mangoes provide fast-acting carbohydrates, while chia seeds and raw nuts deliver healthy fats that slow down glucose absorption, providing stable energy for hours. Plus, the high water content of fresh dragonfruit keeps you hydrated.

### The Sustained Energy: Sourdough Avocado Toast
Avocados are rich in monounsaturated fats, which are burned cleanly as energy by the body. Sourdough bread undergoes a slow fermentation process, resulting in a low glycemic index that prevents blood sugar spikes. Add a poached egg for complete proteins, and you have a breakfast that will power you all the way until a late lunch.

### Hydration is Key: Fresh King Coconut
Do not leave for your tour without drinking fresh coconut water. It is packed with natural potassium, magnesium, and sodium—making it nature’s perfect isotonic drink to prevent muscle cramps under the scorching sun.

### Stop by Alily Penida
We open early in Ped village! Grab a double shot cappuccino, enjoy a nutritious Tropic Avocado Toast, and fill up your water bottles with chilled filtered water before heading out to the harbor. Stay safe and enjoy the journey!`,
    category: 'Lifestyle',
    image: IMAGES.smoothieBowl,
    readTime: '4 min read',
    author: {
      name: 'Kadek Sudi',
      avatar: IMAGES.avatarBarista,
      role: 'Head Barista'
    },
    date: 'May 29, 2026',
    tags: ['Healthy Life', 'Nutrition', 'Active Travel'],
    comments: []
  }
];
