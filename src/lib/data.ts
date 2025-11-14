
export interface House {
  id: number;
  price: number;
  location: string;
  owner: string;
  rating: number;
  description: string;
  type: 'monthly' | 'nightly';
  amenities: string[];
  bedrooms: number;
  bathrooms: number;
  images: string[];
}

export interface Assistant {
  id: number;
  name: string;
  location: string;
  rate: number;
  rating: number;
  description: string;
  specialties: string[];
  images: string[];
}

export interface Caterer {
  id: number;
  name: string;
  cuisine: string;
  price_per_meal: number;
  rating: number;
  description: string;
  location: string;
  images: string[];
  specialty: string[];
  weekly_menu: {
    day: string;
    breakfast: string;
    lunch: string;
    dinner: string;
  }[];
}

export interface Furniture {
  id: number;
  name: string;
  type: 'Sofa' | 'Bed' | 'Table' | 'Chair' | 'Storage';
  price: number;
  rating: number;
  description: string;
  material: string;
  dimensions: string;
  images: string[];
  storeName: string;
}

export interface BookStore {
  id: number;
  name: string;
  location: string;
  rating: number;
  description: string;
  specializes: string[];
  images: string[];
}

export interface Tutor {
  id: number;
  name: string;
  subjects: string[];
  rate: number;
  rating: number;
  description: string;
  location: string;
  experience: string;
  images: string[];
}


export const houses: House[] = [
  { id: 1, price: 25000, location: 'Gulshan, Dhaka', owner: 'Mr. Rahman', rating: 4.5, description: 'A modern 3-bed apartment with city views. Fully furnished and close to amenities.', type: 'monthly', amenities: ['Wi-Fi', 'Air Conditioning', 'Parking', 'Kitchen'], bedrooms: 3, bathrooms: 2, images: ['https://picsum.photos/seed/1/800/600', 'https://picsum.photos/seed/1a/800/600', 'https://picsum.photos/seed/1b/800/600'] },
  { id: 2, price: 18000, location: 'Banani, Dhaka', owner: 'Mrs. Khan', rating: 4.7, description: 'Cozy 2-bed flat in a quiet residential area. Perfect for small families.', type: 'monthly', amenities: ['Wi-Fi', 'Elevator', 'Security'], bedrooms: 2, bathrooms: 1, images: ['https://picsum.photos/seed/2/800/600', 'https://picsum.photos/seed/2a/800/600', 'https://picsum.photos/seed/2b/800/600'] },
  { id: 3, price: 35000, location: 'Dhanmondi, Dhaka', owner: 'Mr. Ali', rating: 4.8, description: 'Spacious 4-bed house with a beautiful garden and lake view.', type: 'monthly', amenities: ['Garden', 'Lake View', 'Parking'], bedrooms: 4, bathrooms: 3, images: ['https://picsum.photos/seed/3/800/600', 'https://picsum.photos/seed/3a/800/600', 'https://picsum.photos/seed/3b/800/600'] },
  { id: 4, price: 15000, location: 'Uttara, Dhaka', owner: 'Mr. Chowdhury', rating: 4.2, description: 'Affordable and clean 2-bed apartment, great for students or professionals.', type: 'monthly', amenities: ['Wi-Fi', 'Kitchen'], bedrooms: 2, bathrooms: 1, images: ['https://picsum.photos/seed/4/800/600', 'https://picsum.photos/seed/4a/800/600', 'https://picsum.photos/seed/4b/800/600'] },
  { id: 5, price: 22000, location: 'Mirpur, Dhaka', owner: 'Mrs. Begum', rating: 4.0, description: 'Well-maintained 3-bed apartment near the stadium.', type: 'monthly', amenities: ['Security', 'Parking'], bedrooms: 3, bathrooms: 2, images: ['https://picsum.photos/seed/5/800/600', 'https://picsum.photos/seed/5a/800/600', 'https://picsum.photos/seed/5b/800/600'] },
  { id: 6, price: 30000, location: 'Agrabad, Chittagong', owner: 'Mr. Islam', rating: 4.6, description: 'Luxury apartment in the commercial heart of Chittagong.', type: 'monthly', amenities: ['Gym', 'Pool', 'Wi-Fi'], bedrooms: 3, bathrooms: 3, images: ['https://picsum.photos/seed/6/800/600', 'https://picsum.photos/seed/6a/800/600', 'https://picsum.photos/seed/6b/800/600'] },
  { id: 7, price: 17000, location: 'Nasirabad, Chittagong', owner: 'Mr. Barua', rating: 4.4, description: 'Comfortable family home with easy access to schools and markets.', type: 'monthly', amenities: ['Family Friendly', 'Parking'], bedrooms: 3, bathrooms: 2, images: ['https://picsum.photos/seed/7/800/600', 'https://picsum.photos/seed/7a/800/600', 'https://picsum.photos/seed/7b/800/600'] },
  { id: 8, price: 28000, location: 'Khulshi, Chittagong', owner: 'Mrs. Das', rating: 4.9, description: 'Exclusive residence in a posh area, offering great security and comfort.', type: 'monthly', amenities: ['24/7 Security', 'Gated Community', 'Wi-Fi'], bedrooms: 4, bathrooms: 4, images: ['https://picsum.photos/seed/8/800/600', 'https://picsum.photos/seed/8a/800/600', 'https://picsum.photos/seed/8b/800/600'] },
  { id: 9, price: 16000, location: 'Amberkhana, Sylhet', owner: 'Mr. Ahmed', rating: 4.3, description: 'Charming 2-bed flat with traditional decor.', type: 'monthly', amenities: ['Wi-Fi', 'Kitchen'], bedrooms: 2, bathrooms: 1, images: ['https://picsum.photos/seed/9/800/600', 'https://picsum.photos/seed/9a/800/600', 'https://picsum.photos/seed/9b/800/600'] },
  { id: 10, price: 20000, location: 'Zindabazar, Sylhet', owner: 'Mr. Haque', rating: 4.1, description: 'Located in the busiest part of town, ideal for those who love city life.', type: 'monthly', amenities: ['City View', 'Elevator'], bedrooms: 2, bathrooms: 2, images: ['https://picsum.photos/seed/10/800/600', 'https://picsum.photos/seed/10a/800/600', 'https://picsum.photos/seed/10b/800/600'] },
  { id: 11, price: 23000, location: 'Baridhara, Dhaka', owner: 'Ms. Yasmin', rating: 4.8, description: 'Elegant apartment in a diplomatic zone, ensuring peace and security.', type: 'monthly', amenities: ['Wi-Fi', 'Air Conditioning', 'High Security'], bedrooms: 2, bathrooms: 2, images: ['https://picsum.photos/seed/11/800/600', 'https://picsum.photos/seed/11a/800/600', 'https://picsum.photos/seed/11b/800/600'] },
  { id: 12, price: 19000, location: 'Mohammadpur, Dhaka', owner: 'Mr. Faisal', rating: 4.2, description: 'A great value 3-bed apartment in a friendly neighborhood.', type: 'monthly', amenities: ['Parking', 'Balcony'], bedrooms: 3, bathrooms: 2, images: ['https://picsum.photos/seed/12/800/600', 'https://picsum.photos/seed/12a/800/600', 'https://picsum.photos/seed/12b/800/600'] },
  { id: 13, price: 4000, location: 'Cox\'s Bazar', owner: 'Mr. Jinnah', rating: 4.9, description: 'Luxurious seaside suite for an unforgettable short stay.', type: 'nightly', amenities: ['Sea View', 'Air Conditioning', 'Wi-Fi'], bedrooms: 1, bathrooms: 1, images: ['https://picsum.photos/seed/13/800/600', 'https://picsum.photos/seed/13a/800/600', 'https://picsum.photos/seed/13b/800/600'] },
  { id: 14, price: 14000, location: 'Shantinagar, Dhaka', owner: 'Mr. Karim', rating: 3.9, description: 'Simple and affordable living space in a central location.', type: 'monthly', amenities: ['Elevator', 'Security'], bedrooms: 2, bathrooms: 1, images: ['https://picsum.photos/seed/14/800/600', 'https://picsum.photos/seed/14a/800/600', 'https://picsum.photos/seed/14b/800/600'] },
  { id: 15, price: 26000, location: 'Panchlaish, Chittagong', owner: 'Mrs. Sen', rating: 4.5, description: 'Modern apartment complex with a gym and swimming pool.', type: 'monthly', amenities: ['Gym', 'Pool', 'Parking'], bedrooms: 3, bathrooms: 2, images: ['https://picsum.photos/seed/15/800/600', 'https://picsum.photos/seed/15a/800/600', 'https://picsum.photos/seed/15b/800/600'] },
  { id: 16, price: 18500, location: 'Uposhohor, Sylhet', owner: 'Mr. Deb', rating: 4.4, description: 'Peaceful suburban home perfect for families.', type: 'monthly', amenities: ['Garden', 'Family Friendly'], bedrooms: 3, bathrooms: 2, images: ['https://picsum.photos/seed/16/800/600', 'https://picsum.photos/seed/16a/800/600', 'https://picsum.photos/seed/16b/800/600'] },
  { id: 17, price: 1200, location: 'Sonadanga, Khulna', owner: 'Mr. Biswas', rating: 4.0, description: 'A clean and convenient room for a short-term visit to Khulna.', type: 'nightly', amenities: ['Wi-Fi', 'TV'], bedrooms: 1, bathrooms: 1, images: ['https://picsum.photos/seed/17/800/600', 'https://picsum.photos/seed/17a/800/600', 'https://picsum.photos/seed/17b/800/600'] },
  { id: 18, price: 17500, location: 'Sadar, Rajshahi', owner: 'Mrs. Sultana', rating: 4.1, description: 'A lovely home known for its proximity to famous mango orchards.', type: 'monthly', amenities: ['Garden', 'Kitchen'], bedrooms: 3, bathrooms: 2, images: ['https://picsum.photos/seed/18/800/600', 'https://picsum.photos/seed/18a/800/600', 'https://picsum.photos/seed/18b/800/600'] },
  { id: 19, price: 19500, location: 'Kotwali, Barisal', owner: 'Mr. Shikder', rating: 4.2, description: 'Experience the Venice of the East in this riverside accommodation.', type: 'monthly', amenities: ['River View', 'Balcony'], bedrooms: 2, bathrooms: 2, images: ['https://picsum.photos/seed/19/800/600', 'https://picsum.photos/seed/19a/800/600', 'https://picsum.photos/seed/19b/800/600'] },
  { id: 20, price: 900, location: 'Sadar, Rangpur', owner: 'Mr. Miah', rating: 3.8, description: 'An economical choice for travelers and backpackers.', type: 'nightly', amenities: ['Free Parking', 'Wi-Fi'], bedrooms: 1, bathrooms: 1, images: ['https://picsum.photos/seed/20/800/600', 'https://picsum.photos/seed/20a/800/600', 'https://picsum.photos/seed/20b/800/600'] },
  { id: 21, price: 32000, location: 'Gulshan 2, Dhaka', owner: 'Mr. Hasan', rating: 4.7, description: 'Premium furnished apartment in Dhaka\'s most prestigious area.', type: 'monthly', amenities: ['Wi-Fi', 'Air Conditioning', 'Gym', 'Pool'], bedrooms: 3, bathrooms: 3, images: ['https://picsum.photos/seed/21/800/600', 'https://picsum.photos/seed/21a/800/600', 'https://picsum.photos/seed/21b/800/600'] },
  { id: 22, price: 24000, location: 'Banani DOHS, Dhaka', owner: 'Col. (Retd.) Zaman', rating: 4.8, description: 'Secure and serene apartment within a DOHS complex.', type: 'monthly', amenities: ['24/7 Security', 'Parking', 'Wi-Fi'], bedrooms: 3, bathrooms: 2, images: ['https://picsum.photos/seed/22/800/600', 'https://picsum.photos/seed/22a/800/600', 'https://picsum.photos/seed/22b/800/600'] },
  { id: 23, price: 13000, location: 'Farmgate, Dhaka', owner: 'Mr. Abdullah', rating: 3.7, description: 'Budget-friendly option in a bustling, central location.', type: 'monthly', amenities: ['Elevator'], bedrooms: 2, bathrooms: 1, images: ['https://picsum.photos/seed/23/800/600', 'https://picsum.photos/seed/23a/800/600', 'https://picsum.photos/seed/23b/800/600'] },
  { id: 24, price: 27000, location: 'Bashundhara R/A, Dhaka', owner: 'Alhaj Uddin', rating: 4.6, description: 'A large, modern home in a well-planned residential area.', type: 'monthly', amenities: ['Parking', 'Garden', 'Security'], bedrooms: 4, bathrooms: 3, images: ['https://picsum.photos/seed/24/800/600', 'https://picsum.photos/seed/24a/800/600', 'https://picsum.photos/seed/24b/800/600'] },
  { id: 25, price: 2500, location: 'Halishahar, Chittagong', owner: 'Mr. Majumder', rating: 4.3, description: 'Stay near the sea in this beautiful guest house.', type: 'nightly', amenities: ['Sea View', 'Wi-Fi', 'Kitchen'], bedrooms: 2, bathrooms: 1, images: ['https://picsum.photos/seed/25/800/600', 'https://picsum.photos/seed/25a/800/600', 'https://picsum.photos/seed/25b/800/600'] },
  { id: 26, price: 3500, location: 'Sreemangal, Sylhet', owner: 'Tea Estate Bungalows', rating: 4.8, description: 'Boutique guesthouse amidst tea gardens. Perfect for nature lovers.', type: 'nightly', amenities: ['Garden View', 'Breakfast Included', 'Tour Assistance'], bedrooms: 1, bathrooms: 1, images: ['https://picsum.photos/seed/26/800/600', 'https://picsum.photos/seed/26a/800/600', 'https://picsum.photos/seed/26b/800/600'] },
  { id: 27, price: 1800, location: 'Saint Martin\'s Island', owner: 'Coral View Resort', rating: 4.6, description: 'Beachfront cottage with stunning ocean views.', type: 'nightly', amenities: ['Beach Access', 'Balcony', 'Restaurant'], bedrooms: 1, bathrooms: 1, images: ['https://picsum.photos/seed/27/800/600', 'https://picsum.photos/seed/27a/800/600', 'https://picsum.photos/seed/27b/800/600'] },
  { id: 28, price: 2200, location: 'Bandarban', owner: 'Hillside Resort', rating: 4.5, description: 'Eco-friendly resort in the hills, offering tranquility and adventure.', type: 'nightly', amenities: ['Mountain View', 'Hiking Trails', 'Restaurant'], bedrooms: 1, bathrooms: 1, images: ['https://picsum.photos/seed/28/800/600', 'https://picsum.photos/seed/28a/800/600', 'https://picsum.photos/seed/28b/800/600'] },
  { id: 29, price: 1500, location: 'Paharpur, Rajshahi', owner: 'Archaeological Guest House', rating: 4.2, description: 'Stay near the Somapura Mahavihara, a UNESCO World Heritage Site.', type: 'nightly', amenities: ['Historical Site Nearby', 'Basic Comforts'], bedrooms: 1, bathrooms: 1, images: ['https://picsum.photos/seed/29/800/600', 'https://picsum.photos/seed/29a/800/600', 'https://picsum.photos/seed/29b/800/600'] },
  { id: 30, price: 4500, location: 'The Sundarbans', owner: 'Jungle Lodge & Tours', rating: 4.7, description: 'An adventurous stay on a houseboat to explore the mangrove forest.', type: 'nightly', amenities: ['All Meals Included', 'Guided Tours', 'Wildlife Viewing'], bedrooms: 1, bathrooms: 1, images: ['https://picsum.photos/seed/30/800/600', 'https://picsum.photos/seed/30a/800/600', 'https://picsum.photos/seed/30b/800/600'] },
];


export const assistants: Assistant[] = [
    { id: 1, name: 'Akash Ahmed', location: 'Dhaka', rate: 500, rating: 4.9, description: 'Expert in navigating Dhaka\'s rental market. Can help with negotiations and paperwork.', specialties: ['Rental Negotiation', 'Local Area Tours', 'Paperwork Assistance'], images: ['https://picsum.photos/seed/a1/400/400'] },
    { id: 2, name: 'Fatima Chowdhury', location: 'Chittagong', rate: 450, rating: 4.8, description: 'Specializes in finding family-friendly homes and connecting you with the best local schools.', specialties: ['Family Relocation', 'School Search', 'Utility Setup'], images: ['https://picsum.photos/seed/a2/400/400'] },
    { id: 3, name: 'Rahim Islam', location: 'Sylhet', rate: 400, rating: 4.7, description: 'Your guide to the beautiful city of Sylhet. Knows all the best spots for living and leisure.', specialties: ['Cultural Integration', 'Local Market Guide', 'Transportation'], images: ['https://picsum.photos/seed/a3/400/400'] },
    { id: 4, name: 'Sumaiya Khan', location: 'Dhaka', rate: 550, rating: 4.9, description: 'Corporate relocation specialist. Ensures a smooth transition for executives and their families.', specialties: ['Corporate Relocation', 'Luxury Rentals', 'Expat Services'], images: ['https://picsum.photos/seed/a4/400/400'] },
    { id: 5, name: 'Tanvir Hasan', location: 'Khulna', rate: 350, rating: 4.6, description: 'Affordable and reliable assistance for students and young professionals moving to Khulna.', specialties: ['Budget Rentals', 'Student Accommodation', 'City Orientation'], images: ['https://picsum.photos/seed/a5/400/400'] },
    { id: 6, name: 'Nadia Begum', location: 'Rajshahi', rate: 300, rating: 4.5, description: 'Friendly and knowledgeable, Nadia can help you settle into the calm city of Rajshahi.', specialties: ['Local Errands', 'Language Support', 'Community Introduction'], images: ['https://picsum.photos/seed/a6/400/400'] },
    { id: 7, name: 'Imran Mahmud', location: 'Chittagong', rate: 500, rating: 4.8, description: 'Experienced in logistics and moving services in the bustling port city of Chittagong.', specialties: ['Moving Logistics', 'Port Area Expert', 'Business Setup'], images: ['https://picsum.photos/seed/a7/400/400'] },
    { id: 8, name: 'Sanjida Akter', location: 'Dhaka', rate: 600, rating: 5.0, description: 'Top-rated assistant providing premium, white-glove services for a hassle-free move.', specialties: ['Premium Services', 'Home Setup', 'Personal Shopping'], images: ['https://picsum.photos/seed/a8/400/400'] },
    { id: 9, name: 'Kamal Uddin', location: 'Barisal', rate: 380, rating: 4.7, description: 'Specializing in river tours and finding unique accommodations in the Venice of the East.', specialties: ['River Tours', 'Unique Stays', 'Local Cuisine Guide'], images: ['https://picsum.photos/seed/a9/400/400'] },
    { id: 10, name: 'Sharmin Sultana', location: 'Cox\'s Bazar', rate: 480, rating: 4.9, description: 'Your go-to expert for beachside rentals and tourist activities in Cox\'s Bazar.', specialties: ['Beach Rentals', 'Tour Packages', 'Seafood Restaurant Guide'], images: ['https://picsum.photos/seed/a10/400/400'] },
    { id: 11, name: 'Rizwan Ali', location: 'Dhaka', rate: 520, rating: 4.8, description: 'Focuses on the commercial and business districts of Motijheel and Panthapath.', specialties: ['Commercial Properties', 'Business Licenses', 'Networking'], images: ['https://picsum.photos/seed/a11/400/400'] },
    { id: 12, name: 'Ayesha Siddika', location: 'Sylhet', rate: 420, rating: 4.8, description: 'Helps newcomers explore the natural beauty of Sylhet, including tea gardens and waterfalls.', specialties: ['Nature Retreats', 'Eco-tourism', 'Local Crafts'], images: ['https://picsum.photos/seed/a12/400/400'] }
];

const defaultMenu = [
  { day: 'Saturday', breakfast: 'Paratha with Egg Curry', lunch: 'Rice, Chicken Curry, Dal', dinner: 'Khichuri with Begun Bhaja' },
  { day: 'Sunday', breakfast: 'Luchi with Aloo Dum', lunch: 'Rice, Fish Curry, Vegetables', dinner: 'Roti with Mutton Korma' },
  { day: 'Monday', breakfast: 'Roti with Sabzi', lunch: 'Rice, Dal, Bhorta', dinner: 'Chicken Biryani' },
  { day: 'Tuesday', breakfast: 'Panta Bhat with Shutki', lunch: 'Rice, Beef Curry, Salad', dinner: 'Plain Rice with Fish Fry' },
  { day: 'Wednesday', breakfast: 'Noodles with Vegetables', lunch: 'Rice, Lentil Soup, Mixed Veggies', dinner: 'Vegetable Pulao with Raita' },
  { day: 'Thursday', breakfast: 'Shemai', lunch: 'Mutton Biryani', dinner: 'Rice with Dal and Aloo Bhaji' },
  { day: 'Friday', breakfast: 'Chitoi Pitha with Molasses', lunch: 'Pulao, Chicken Roast, Borhani', dinner: 'Light Rice with Fish Jhol' },
];

export const caterers: Caterer[] = [
  { id: 1, name: 'HomeCooked BD', cuisine: 'Bengali', price_per_meal: 80, rating: 4.8, description: 'Healthy and hygienic homemade meals, delivered to your doorstep.', location: 'Dhaka', images: ['https://picsum.photos/seed/c1/800/600', 'https://picsum.photos/seed/c1a/800/600'], specialty: ['Bhuna Khichuri', 'Chicken Jhol'], weekly_menu: defaultMenu },
  { id: 2, name: 'Daily Tiffin', cuisine: 'Mixed', price_per_meal: 75, rating: 4.6, description: 'Affordable daily meal plans with a variety of options.', location: 'Chittagong', images: ['https://picsum.photos/seed/c2/800/600', 'https://picsum.photos/seed/c2a/800/600'], specialty: ['Set Menu', 'Weekly Package'], weekly_menu: defaultMenu },
  { id: 3, name: 'Healthy Eats', cuisine: 'Healthy', price_per_meal: 95, rating: 4.7, description: 'Nutritious and delicious meals for the health-conscious.', location: 'Dhaka', images: ['https://picsum.photos/seed/c3/800/600', 'https://picsum.photos/seed/c3a/800/600'], specialty: ['Grilled Chicken Salad', 'Quinoa Bowl'], weekly_menu: defaultMenu },
  { id: 4, name: 'Mayer Ranna', cuisine: 'Bengali', price_per_meal: 70, rating: 4.9, description: 'Traditional Bengali food that tastes just like mom\'s cooking.', location: 'Sylhet', images: ['https://picsum.photos/seed/c4/800/600', 'https://picsum.photos/seed/c4a/800/600'], specialty: ['Macher Jhol', 'Begun Bhorta'], weekly_menu: defaultMenu },
  { id: 5, name: 'Quick Bites', cuisine: 'Fast Food', price_per_meal: 90, rating: 4.5, description: 'Your daily dose of delicious fast food, made fresh.', location: 'Dhaka', images: ['https://picsum.photos/seed/c5/800/600', 'https://picsum.photos/seed/c5a/800/600'], specialty: ['Burger', 'Fried Chicken'], weekly_menu: defaultMenu },
  { id: 6, name: 'Tadka House', cuisine: 'Indian', price_per_meal: 85, rating: 4.7, description: 'Spicy and flavorful Indian dishes to spice up your day.', location: 'Khulna', images: ['https://picsum.photos/seed/c6/800/600', 'https://picsum.photos/seed/c6a/800/600'], specialty: ['Butter Chicken', 'Paneer Tikka'], weekly_menu: defaultMenu },
  { id: 7, name: 'Deshi Aroma', cuisine: 'Bengali', price_per_meal: 80, rating: 4.8, description: 'Serving the most aromatic and flavorful traditional Bangladeshi meals.', location: 'Dhaka', images: ['https://picsum.photos/seed/c7/800/600', 'https://picsum.photos/seed/c7a/800/600'], specialty: ['Beef Bhuna', 'Ilish Paturi'], weekly_menu: defaultMenu },
  { id: 8, name: 'Chattogram Kitchen', cuisine: 'Chatgaiya', price_per_meal: 90, rating: 4.9, description: 'Authentic Chittagonian cuisine, famous for its spicy Mezban.', location: 'Chittagong', images: ['https://picsum.photos/seed/c8/800/600', 'https://picsum.photos/seed/c8a/800/600'], specialty: ['Mezbani Gosht', 'Kala Bhuna'], weekly_menu: defaultMenu }
];

export const furniture: Furniture[] = [
  { id: 1, name: 'Modern Velvet Sofa', type: 'Sofa', price: 22000, rating: 4.7, storeName: 'Comfy Homes', description: 'A plush velvet sofa that brings a touch of elegance to any living room. Comfortable and stylish.', material: 'Velvet, Wood', dimensions: '84" W x 34" D x 30" H', images: ['https://picsum.photos/seed/f1/800/600', 'https://picsum.photos/seed/f1a/800/600'] },
  { id: 2, name: 'Queen Size Wooden Bed', type: 'Bed', price: 18000, rating: 4.8, storeName: 'Sleepy Head', description: 'Sturdy wooden bed frame with a classic design. Provides excellent support for a restful night\'s sleep.', material: 'Oak Wood', dimensions: '62" W x 83" L x 45" H', images: ['https://picsum.photos/seed/f2/800/600', 'https://picsum.photos/seed/f2a/800/600'] },
  { id: 3, name: 'Minimalist Dining Table', type: 'Table', price: 15000, rating: 4.6, storeName: 'Urban Decor', description: 'A sleek and modern dining table that seats six. Perfect for family meals and dinner parties.', material: 'MDF, Metal', dimensions: '72" L x 36" W x 30" H', images: ['https://picsum.photos/seed/f3/800/600', 'https://picsum.photos/seed/f3a/800/600'] },
  { id: 4, name: 'Ergonomic Office Chair', type: 'Chair', price: 8000, rating: 4.9, storeName: 'WorkSpace Solutions', description: 'Stay comfortable and productive with this ergonomic chair, featuring adjustable height and lumbar support.', material: 'Mesh, Plastic, Metal', dimensions: '25" W x 25" D x 45" H', images: ['https://picsum.photos/seed/f4/800/600', 'https://picsum.photos/seed/f4a/800/600'] },
  { id: 5, name: '5-Drawer Storage Chest', type: 'Storage', price: 12000, rating: 4.5, storeName: 'Neat Freaks', description: 'A spacious chest of drawers to keep your clothes and belongings organized. Clean, modern design.', material: 'Particle Board', dimensions: '32" W x 18" D x 48" H', images: ['https://picsum.photos/seed/f5/800/600', 'https://picsum.photos/seed/f5a/800/600'] },
  { id: 6, name: 'L-Shaped Sectional Sofa', type: 'Sofa', price: 35000, rating: 4.8, storeName: 'Comfy Homes', description: 'A large, comfortable sectional sofa perfect for big families or entertaining guests. Includes chaise lounge.', material: 'Fabric, Wood', dimensions: '110" W x 85" D x 32" H', images: ['https://picsum.photos/seed/f6/800/600', 'https://picsum.photos/seed/f6a/800/600'] },
  { id: 7, name: 'King Size Upholstered Bed', type: 'Bed', price: 25000, rating: 4.7, storeName: 'Sleepy Head', description: 'An elegant upholstered bed with a tufted headboard. A beautiful centerpiece for any bedroom.', material: 'Fabric, Wood', dimensions: '78" W x 83" L x 50" H', images: ['https://picsum.photos/seed/f7/800/600', 'https://picsum.photos/seed/f7a/800/600'] },
  { id: 8, name: 'Round Coffee Table', type: 'Table', price: 6000, rating: 4.5, storeName: 'Urban Decor', description: 'A stylish and functional coffee table with a round top and geometric metal base.', material: 'Wood Veneer, Metal', dimensions: '36" Diameter x 18" H', images: ['https://picsum.photos/seed/f8/800/600', 'https://picsum.photos/seed/f8a/800/600'] },
  { id: 9, name: 'Accent Armchair', type: 'Chair', price: 9500, rating: 4.6, storeName: 'Comfy Homes', description: 'A comfortable armchair that adds a pop of color and style to your living space.', material: 'Linen, Wood', dimensions: '30" W x 32" D x 35" H', images: ['https://picsum.photos/seed/f9/800/600', 'https://picsum.photos/seed/f9a/800/600'] },
  { id: 10, name: 'Tall Bookcase', type: 'Storage', price: 9000, rating: 4.7, storeName: 'WorkSpace Solutions', description: 'A five-shelf bookcase to display your favorite books and decorative items. Sturdy and spacious.', material: 'Engineered Wood', dimensions: '30" W x 12" D x 72" H', images: ['https://picsum.photos/seed/f10/800/600', 'https://picsum.photos/seed/f10a/800/600'] },
  { id: 11, name: 'Wooden Dining Chairs (Set of 4)', type: 'Chair', price: 14000, rating: 4.6, storeName: 'Urban Decor', description: 'A set of four sturdy and stylish wooden chairs to complement your dining table.', material: 'Rubberwood', dimensions: '18" W x 20" D x 38" H', images: ['https://picsum.photos/seed/f11/800/600', 'https://picsum.photos/seed/f11a/800/600'] },
  { id: 12, name: 'TV Stand with Storage', type: 'Storage', price: 11000, rating: 4.5, storeName: 'Neat Freaks', description: 'A modern TV stand that supports TVs up to 65 inches, with cabinets for media storage.', material: 'MDF, Metal', dimensions: '60" W x 16" D x 22" H', images: ['https://picsum.photos/seed/f12/800/600', 'https://picsum.photos/seed/f12a/800/600'] },
];

export const bookStores: BookStore[] = [
  { id: 1, name: 'Pathak Shamabesh', location: 'Shahbag, Dhaka', rating: 4.8, description: 'A large collection of local and international books. A hub for intellectuals.', specializes: ['Bengali Literature', 'Academic Books', 'International Best-Sellers'], images: ['https://picsum.photos/seed/bs1/800/600', 'https://picsum.photos/seed/bs1a/800/600'] },
  { id: 2, name: 'Boi Bichitra', location: 'Nilkhet, Dhaka', rating: 4.7, description: 'Famous for academic textbooks and reference materials at affordable prices.', specializes: ['University Textbooks', 'Medical Books', 'Engineering Books'], images: ['https://picsum.photos/seed/bs2/800/600', 'https://picsum.photos/seed/bs2a/800/600'] },
  { id: 3, name: 'Batighar', location: 'Cheragi Pahar, Chittagong', rating: 4.9, description: 'An iconic bookstore with a unique interior resembling a lighthouse. Great ambiance.', specializes: ['Creative Books', 'Magazines & Journals', 'Children\'s Corner'], images: ['https://picsum.photos/seed/bs3/800/600', 'https://picsum.photos/seed/bs3a/800/600'] },
  { id: 4, name: 'Prothoma', location: 'Zindabazar, Sylhet', rating: 4.6, description: 'A well-organized bookstore with a good collection of books from various genres.', specializes: ['Fiction', 'Non-Fiction', 'Local History'], images: ['https://picsum.photos/seed/bs4/800/600', 'https://picsum.photos/seed/bs4a/800/600'] },
  { id: 5, name: 'Khan Brothers', location: 'Sadar, Rajshahi', rating: 4.5, description: 'A trusted name in Rajshahi for academic books and stationery for generations.', specializes: ['School & College Books', 'Stationery', 'Admission Guides'], images: ['https://picsum.photos/seed/bs5/800/600', 'https://picsum.photos/seed/bs5a/800/600'] },
  { id: 6, name: 'Peoples\' Library', location: 'Sadar Road, Khulna', rating: 4.4, description: 'One of the oldest bookstores in Khulna, offering a wide range of books.', specializes: ['Classic Literature', 'Religious Texts', 'Job Preparation'], images: ['https://picsum.photos/seed/bs6/800/600', 'https://picsum.photos/seed/bs6a/800/600'] },
  { id: 7, name: 'Gyankosh Prokashoni', location: 'Banglabazar, Dhaka', rating: 4.7, description: 'A major publisher and seller of Bengali books, located in the heart of Dhaka\'s book market.', specializes: ['Bengali Publications', 'Poetry', 'Philosophy'], images: ['https://picsum.photos/seed/bs7/800/600', 'https://picsum.photos/seed/bs7a/800/600'] },
  { id: 8, name: 'Friends Book Corner', location: 'Jaleswaritola, Bogura', rating: 4.6, description: 'The go-to place for students and book lovers in Bogura.', specializes: ['Academic Books', 'Children\'s Books', 'Novels'], images: ['https://picsum.photos/seed/bs8/800/600', 'https://picsum.photos/seed/bs8a/800/600'] },
];

export const tutors: Tutor[] = [
  { id: 1, name: 'Mr. Anisul Haque', subjects: ['Physics', 'Chemistry', 'Math'], rate: 8000, rating: 4.9, description: 'Experienced tutor for A-Level and HSC students. Helps build a strong conceptual foundation.', location: 'Dhanmondi, Dhaka', experience: '10+ years', images: ['https://picsum.photos/seed/t1/400/400'] },
  { id: 2, name: 'Ms. Sharmin Rahman', subjects: ['English', 'IELTS'], rate: 10000, rating: 4.8, description: 'Certified English language instructor. Specializes in IELTS preparation with proven results.', location: 'Gulshan, Dhaka', experience: '8 years', images: ['https://picsum.photos/seed/t2/400/400'] },
  { id: 3, name: 'Mr. Biplob Das', subjects: ['Biology', 'Admission Test'], rate: 7500, rating: 4.7, description: 'Medical admission test specialist. Passionate about helping students achieve their dreams.', location: 'Jamal Khan, Chittagong', experience: '7 years', images: ['https://picsum.photos/seed/t3/400/400'] },
  { id: 4, name: 'Ms. Faiza Ahmed', subjects: ['Art', 'History'], rate: 5000, rating: 4.9, description: 'An art enthusiast who makes learning history and art fun and engaging for all ages.', location: 'Uposhohor, Sylhet', experience: '5 years', images: ['https://picsum.photos/seed/t4/400/400'] },
  { id: 5, name: 'Mr. Karim Chowdhury', subjects: ['Accounting', 'Finance'], rate: 7000, rating: 4.8, description: 'Professional accountant offering tutoring for business students (BBA/MBA).', location: 'Motijheel, Dhaka', experience: '12 years', images: ['https://picsum.photos/seed/t5/400/400'] },
  { id: 6, name: 'Ms. Farhana Yasmin', subjects: ['Economics', 'Statistics'], rate: 6500, rating: 4.7, description: 'University lecturer providing in-depth tutoring for economics and statistics students.', location: 'Nasirabad, Chittagong', experience: '9 years', images: ['https://picsum.photos/seed/t6/400/400'] },
  { id: 7, name: 'Mr. Jamal Sheikh', subjects: ['Bangla', 'History'], rate: 4500, rating: 4.6, description: 'Specializes in Bengali language and literature, and the history of the subcontinent.', location: 'Sadar, Rajshahi', experience: '15 years', images: ['https://picsum.photos/seed/t7/400/400'] },
  { id: 8, name: 'Ms. Ayesha Parvin', subjects: ['Computer Science', 'ICT'], rate: 8500, rating: 4.9, description: 'Software engineer helping students with programming, algorithms, and ICT subjects.', location: 'Sonadanga, Khulna', experience: '6 years', images: ['https://picsum.photos/seed/t8/400/400'] },
  { id: 9, name: 'Mr. Rifat Hossain', subjects: ['University Admission'], rate: 9000, rating: 4.8, description: 'Expert coach for university admission tests (Dhaka University, BUET, etc.).', location: 'Farmgate, Dhaka', experience: '8 years', images: ['https://picsum.photos/seed/t9/400/400'] },
  { id: 10, name: 'Ms. Nazia Tabassum', subjects: ['Social Science', 'Geography'], rate: 5500, rating: 4.7, description: 'Engaging teaching methods for junior and high school students in social sciences.', location: 'Amberkhana, Sylhet', experience: '7 years', images: ['https://picsum.photos/seed/t10/400/400'] },
  { id: 11, name: 'Mr. Mehedi Hasan', subjects: ['O-Level', 'A-Level Physics'], rate: 12000, rating: 4.9, description: 'Specialized tutor for the Cambridge International curriculum (O/A Levels).', location: 'Uttara, Dhaka', experience: '10 years', images: ['https://picsum.photos/seed/t11/400/400'] },
  { id: 12, name: 'Ms. Ishrat Jahan', subjects: ['All Subjects (Junior)'], rate: 6000, rating: 4.8, description: 'Caring and patient tutor for primary and junior school students (Class 1-5).', location: 'Khulshi, Chittagong', experience: '9 years', images: ['https://picsum.photos/seed/t12/400/400'] },
];


export const placeholderImages = [
  ...Array.from({ length: 30 }, (_, i) => ({ id: (i + 1).toString(), imageUrl: `https://picsum.photos/seed/${i + 1}/600/400`, imageHint: 'apartment building' })),
  ...Array.from({ length: 12 }, (_, i) => ({ id: `assistant-${i + 1}`, imageUrl: `https://picsum.photos/seed/a${i + 1}/400/400`, imageHint: 'person portrait' })),
  ...Array.from({ length: 8 }, (_, i) => ({ id: `caterer-${i + 1}`, imageUrl: `https://picsum.photos/seed/c${i + 1}/600/400`, imageHint: 'food catering' })),
  ...Array.from({ length: 12 }, (_, i) => ({ id: `furniture-${i + 1}`, imageUrl: `https://picsum.photos/seed/f${i + 1}/600/400`, imageHint: 'modern furniture' })),
  ...Array.from({ length: 8 }, (_, i) => ({ id: `book-store-${i + 1}`, imageUrl: `https://picsum.photos/seed/bs${i + 1}/600/400`, imageHint: 'book store' })),
  ...Array.from({ length: 12 }, (_, i) => ({ id: `tutor-${i + 1}`, imageUrl: `https://picsum.photos/seed/t${i + 1}/400/400`, imageHint: 'person studying' }))
];

    
