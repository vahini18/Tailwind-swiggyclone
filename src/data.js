const categories = [
    {
        id: 1,
        name: "Briyani",
        image: "images/briyani.png",
        color: "white"
    
    },
    {
        id: 2,
        name: "Burgers",
        image: "images/Burger.png",
        color: "white"
    },
    {
        id: 3,
        name: "Pizza",
        image: "images/pizza.jpg",
        color: "white"
    },
    {
        id: 4,
        name: "Chinese",
        image: "images/chinese.jpg",
        color: "white"
    },
    {
        id: 5,
        name: "Ice cream",
        image:"images/ice cream.png",
        color: "white"
    },
    {
        id: 6,
        name: "Cake",
        image: "images/cake.png",
        color: "white"
    },

     {
        id: 7,
        name: "Parotta",
        image: "images/parotta.png",
        color: "white"
    },

     {
        id: 8,
        name: "Pasta",
        image: "images/pasta.png",
        color: "white"
    },
     {
        id: 9,
        name: "Kebab",
        image: "images/kebab.png",
        color: "white"
    },
     {
        id: 8,
        name: "Pure Veg",
        image: "images/pureveg.png",
        color: "white"
    },
     {
        id: 10,
        name: "Momos",
        image: "images/momos.png",
        color: "white"
    },
    {
        id: 11,
        name: "Dosa",
        image: "images/dosa.png",
        color: "white"
    },
    
];
const restaurants = [
    {
    id: 1,
    name: "Subway",
    image: "images/subway - Copy.jpg",
    rating: 4.2,
    deliveryTime: "20-25 mins",
    cuisine: "Sandwich, Salads, Wrap, Healthy Food",
    location: "Saravanampatty",
    promoted: true,
    menu: [
  {
    id: 101,
    name: "Cheesy Chicken Tikka",
    price: 369,
    image: "images/Cheesy Chicken Tikka.jpg",
    description: "Double the chicken, real mozzarella cheese, tandoori sauce, fresh veggies. 15cm - 654 kcal, 30cm - 1308 kcal.",
    category: "Sub Sandwich"
  },
  {
    id: 102,
    name: "Cheesy Paneer Tikka",
    price: 369,
    image: "images/Cheesy Paneer Tikka.jpg",
    description: "Double paneer with mozzarella cheese and tandoori sauce. 15cm - 678 kcal, 30cm - 1356 kcal.",
    category: "Veg Sandwich"
  },
  {
    id: 103,
    name: "Cheesy Mexican",
    price: 329,
    image: "images/Cheesy Mexican.jpg",
    description: "1.5x chili bean patty, chipotle southwest sauce, jalapeno, veggies. 15cm - 597 kcal.",
    category: "Veg Sandwich"
  },
  {
    id: 104,
    name: "Cheesy American BBQ",
    price: 329,
    image: "images/Cheesy American BBQ.jpg",
    description: "BBQ sauce, 1.5x filling, capsicum, onion, gherkins, cheese slice. 15cm - 457 kcal.",
    category: "Non-Veg Sandwich"
  },
  {
    id: 105,
    name: "Chicken Keema Melt",
    price: 299,
    image: "images/Chicken Keema Melt.jpg",
    description: "1.5x chicken keema, chili mayo, mozzarella, capsicum, onion. 15cm - 569 kcal.",
    category: "Non-Veg Sandwich"
  },
  {
    id: 106,
    name: "Egg'n Chicken Melt",
    price: 299,
    image: "images/Egg'n Chicken Melt.jpg",
    description: "Egg & chicken slices, chipotle sauce, veggies, mozzarella. 15cm - 525 kcal.",
    category: "Non-Veg Sandwich"
  },
  {
    id: 107,
    name: "Cheesy Lamb Pepperoni",
    price: 369,
    image: "images/Cheesy Lamb Pepperoni.jpg",
    description: "Lamb pepperoni, mozzarella, eggless mayo, veggies. 15cm - 503 kcal.",
    category: "Non-Veg Sandwich"
  },
  {
    id: 108,
    name: "Potato Chilli Cheese",
    price: 299,
    image: "images/Potato Chilli Cheese.jpg",
    description: "Potato patty, mint mayo, onion, capsicum, cheese. 15cm - 518 kcal.",
    category: "Veg Sandwich"
  },
  {
    id: 109,
    name: "Double Egg n' Cheese Omelette Sandwich",
    price: 239,
    image: "images/Double Egg n' Cheese Omelette Sandwich.jpg",
    description: "Double omelette with cheese and chili mayo. 15cm - 366 kcal.",
    category: "Non-Veg Sandwich"
  },
  {
    id: 110,
    name: "Paneer Tikka Sandwich",
    price: 269,
    image: "images/Paneer Tikka Sandwich.jpg",
    description: "Cottage cheese cubes marinated in tandoori sauce with veggies. 15cm - 540 kcal.",
    category: "Veg Sandwich"
  },
  {
    id: 111,
    name: "Aloo Patty Sandwich",
    price: 219,
    image: "images/Aloo Patty Sandwich.jpg",
    description: "Aloo patty with herbs and veggies. 15cm - 459 kcal.",
    category: "Veg Sandwich"
  },
  {
    id: 112,
    name: "Veg Shammi Sandwich",
    price: 239,
    image: "images/Veg Shammi Sandwich.jpg",
    description: "Lentil kebab with garlic, onion and veggies. 15cm - 473 kcal.",
    category: "Veg Sandwich"
  },
  {
    id: 113,
    name: "Veggie Delite Sandwich",
    price: 209,
    image: "images/Veggie Delite Sandwich.jpg",
    description: "Lettuce, tomato, cucumber, olives, and pickles. 15cm - 368 kcal.",
    category: "Veg Sandwich"
  },
  {
    id: 114,
    name: "Corn & Peas Sandwich",
    price: 219,
    image: "images/Corn & Peas Sandwich.jpg",
    description: "Corn, green peas, carrots in creamy mayo. 15cm - 382 kcal.",
    category: "Veg Sandwich"
  },
  {
    id: 115,
    name: "Chilli Bean Patty Sandwich",
    price: 239,
    image: "images/Chilli Bean Patty Sandwich.jpg",
    description: "Kidney bean patty, seasoned with spices and veggies. 15cm - 555 kcal.",
    category: "Veg Sandwich"
  },
  {
    id: 116,
    name: "Peri Peri Chicken Sandwich",
    price: 259,
    image: "images/Peri Peri Chicken Sandwich.jpg",
    description: "African peri-peri chicken with veggies. 15cm - 504 kcal.",
    category: "Non-Veg Sandwich"
  }
    ]
  },
  {
    id: 2,
    name: "McDonald's",
    image: "images/mcdonalds.jpg",
    rating: 4.3,
    deliveryTime: "45-50 mins",
    cuisine: "Burgers, Beverages, Cafe, Desserts",
    location: "Avinashi Road",
    promoted: true
  },
  {
    id: 3,
    name: "HRX by EatFit",
    image: "images/hxr.jpg",
    rating: 4.4,
    deliveryTime: "55-60 mins",
    cuisine: "Healthy Food, Salads, Burgers",
    location: "Peelamedu",
    promoted: false
  },
  {
    id: 4,
    name: "Home Plate by EatFit",
    image: "images/eatfithp.jpg",
    rating: 4.3,
    deliveryTime: "45-50 mins",
    cuisine: "North Indian, Home Food, Healthy Food, South Indian",
    location: "Peelamedu",
    promoted: false
  },
  {
    id: 5,
    name: "Ovenfresh Cakes And Desserts",
    image: "images/ovencake.jpeg",
    rating: 4.4,
    deliveryTime: "35-40 mins",
    cuisine: "Bakery, Desserts, Ice Cream, Sweets, Juices",
    location: "Saravanampatti",
    promoted: false
  },
  {
    id: 6,
    name: "The Dessert Heaven",
    image: "images/dessertheaven.jpg",
    rating: 4.4,
    deliveryTime: "40-45 mins",
    cuisine: "Bakery, Desserts, Sweets, Ice Cream",
    location: "Ramanandha Nagar",
    promoted: true
  },
  {
    id: 7,
    name: "McDonald's Gourmet Burger Collection",
    image: "images/McDonalds-Gourmet-Burger-Collection.jpg",
    rating: 4.3,
    deliveryTime: "45-50 mins",
    cuisine: "Burgers, Cafe, Desserts",
    location: "Periyar Nagar",
    promoted: false
  },
  {
    id: 8,
    name: "Makhani Darbar",
    image: "images/makhani.jpg",
    rating: 4.2,
    deliveryTime: "45-50 mins",
    cuisine: "Kebabs, Mughlai, Beverages, Desserts",
    location: "Poombugar Nagar Rd",
    promoted: true
  },
  {
    id: 9,
    name: "Veg Meals by Lunchbox",
    image: "images/vegmeal.jpg",
    rating: 4.6,
    deliveryTime: "50-55 mins",
    cuisine: "Biryani, North Indian, Desserts",
    location: "Saravanamapatti Village",
    promoted: true
  },
  {
    id: 10,
    name: "Faasos' Signature Wraps & Rolls",
    image: "images/Faasos Signature Wraps & Rolls 2.avif",
    rating: 4.4,
    deliveryTime: "50-55 mins",
    cuisine: "Fast Food, North Indian, Snacks, Desserts",
    location: "Saravanamapatti Village",
    promoted: true
  },
  {
    id: 11,
    name: "Sharma Punjabi Restaurant",
    image: "images/punjabi.jpg",
    rating: 4.3,
    deliveryTime: "55-60 mins",
    cuisine: "North Indian, Chinese, Punjabi",
    location: "Peelamedu",
    promoted: false
  },
  {
    id: 12,
    name: "CakeZone Patisserie",
    image: "images/cake.jpeg",
    rating: 4.4,
    deliveryTime: "40-45 mins",
    cuisine: "Bakery, Desserts, Sweets",
    location: "Ramanandha Nagar",
    promoted: true
  },
  {
    id: 13,
    name: "EatFit - All Things Healthy",
    image: "images/eatfit.png",
    rating: 4.5,
    deliveryTime: "45-50 mins",
    cuisine: "Chinese, Healthy Food, Tandoor, Pizzas",
    location: "Peelamedu",
    promoted: false
  },
  {
    id: 14,
    name: "Veg Daawat by Behrouz",
    image: "images/behrouz.png",
    rating: 4.2,
    deliveryTime: "55-60 mins",
    cuisine: "Biryani, North Indian, Mughlai",
    location: "Saravanamapatti Village",
    promoted: false
  },
  {
    id: 15,
    name: "Great Indian Khichdi by EatFit",
    image: "images/khichdi.png",
    rating: 4.4,
    deliveryTime: "45-50 mins",
    cuisine: "Home Food, North Indian, Healthy Food",
    location: "Peelamedu",
    promoted: false
  },
  {
    id: 16,
    name: "The Biryani Life",
    image: "images/briyanilife.png",
    rating: 4.1,
    deliveryTime: "40-45 mins",
    cuisine: "Biryani, Mughlai, Hyderabadi",
    location: "Saravanamapatti Village",
    promoted: true
  },
  {
    id: 17,
    name: "Firangi Bake",
    image: "images/firangi bake.avif",
    rating: 4.2,
    deliveryTime: "45-50 mins",
    cuisine: "Pizzas, Italian, Mexican, Healthy Food",
    location: "Saravanamapatti Village",
    promoted: false
  },
  {
    id: 18,
    name: "LunchBox - Meals and Thalis",
    image: "images/LunchBox Meals and Thalis.jpg",
    rating: 4.6,
    deliveryTime: "40-45 mins",
    cuisine: "Thalis, North Indian, Biryani",
    location: "Saravanamapatti Village",
    promoted: true
  },
  {
    id: 19,
    name: "Faasos - Wraps, Rolls & Shawarma",
    image: "images/faasos.png",
    rating: 4.4,
    deliveryTime: "45-50 mins",
    cuisine: "Kebabs, Snacks, American, Healthy Food",
    location: "Saravanamapatti Village",
    promoted: false
  },
  {
    id: 20,
    name: "Oven Story Pizza",
    image: "images/ovenstory pizza.avif",
    rating: 4.3,
    deliveryTime: "45-50 mins",
    cuisine: "Pizzas, Italian, Desserts",
    location: "Saravanamapatti Village",
    promoted: false
  }
];
const paymentMethods = [
    { 
        id: 'card', 
        name: 'Credit/Debit Card', 
        icon: 'credit-card', 
        description: 'Visa, Mastercard, Rupay' 
    },
    { 
        id: 'upi', 
        name: 'UPI', 
        icon: 'smartphone', 
        description: 'GPay, PhonePe, Paytm' 
    },
    { 
        id: 'wallet', 
        name: 'Wallet', 
        icon: 'wallet', 
        description: 'Paytm, Amazon Pay' 
    },
    { 
        id: 'cod', 
        name: 'Cash on Delivery', 
        icon: 'banknote', 
        description: 'Pay when you receive' 
    }
];
const addresses = [
    {
        id: 0,
        type: 'Home',
        address: 'Girls Hostel,Sri Ramakrishna Engineering College,Vattamalaipalayam, N.G.G.O Colony, Coimbatore, Tamil Nadu 641022',
        landmark: 'Sri Ramakrishna Engineering College'
    },
    {
        id: 1,
        type: 'Work',
        address: 'Girls Hostel,Sri Ramakrishna Engineering College,Vattamalaipalayam, N.G.G.O Colony, Coimbatore, Tamil Nadu 641022',
        landmark: 'Sri Ramakrishna Engineering College'
    }
];