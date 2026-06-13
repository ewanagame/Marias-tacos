export type MenuItem = {
  name: string;
  emoji: string;
  price?: string;
  description: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "tacos",
    title: "Tacos",
    items: [
      {
        name: "Adobada / Pork",
        emoji: "🌮",
        price: "$3.00",
        description:
          "Tender pork marinated in rich adobada spices, served on a warm corn tortilla.",
      },
      {
        name: "Pollo / Chicken",
        emoji: "🐓",
        price: "$3.00",
        description:
          "Seasoned grilled chicken with fresh cilantro and onions on a corn tortilla.",
      },
      {
        name: "Chorizo / Pork Sausage",
        emoji: "🌶️",
        price: "$3.00",
        description:
          "Savory Mexican chorizo with bold, smoky flavor on a fresh tortilla.",
      },
      {
        name: "Azada / Steak",
        emoji: "🥩",
        price: "$3.00",
        description:
          "Marinated carne asada, grilled and sliced thin on a warm corn tortilla.",
      },
      {
        name: "Lengua / Tongue",
        emoji: "🍖",
        price: "$4.00",
        description:
          "Slow-cooked beef tongue, tender and rich, finished with fresh toppings.",
      },
      {
        name: "Cabeza / Cow Head",
        emoji: "🐄",
        price: "$4.00",
        description:
          "Traditional braised beef cheek — succulent, flavorful, and authentically prepared.",
      },
      {
        name: "Hard Shell with Ground Beef",
        emoji: "🌯",
        price: "$4.00",
        description:
          "Crispy hard shell filled with seasoned ground beef, lettuce, cheese, and salsa.",
      },
      {
        name: "Walking Taco",
        emoji: "🛍️",
        price: "$7.50",
        description:
          "A bag of chips loaded with seasoned meat, cheese, lettuce, and all the fixings.",
      },
    ],
  },
  {
    id: "burritos",
    title: "Burritos",
    items: [
      {
        name: "Burrito",
        emoji: "🌯",
        price: "$9.00",
        description:
          "Beans, rice, lettuce, tomato, onions, cilantro, cheese, and sour cream wrapped in a flour tortilla.",
      },
      {
        name: "Breakfast Burrito",
        emoji: "🍳",
        price: "$9.00",
        description:
          "Potatoes, eggs, chorizo, and cheese — a hearty start to your morning.",
      },
      {
        name: "Texas Burrito",
        emoji: "⭐",
        price: "$14.00",
        description:
          "Shrimp, chorizo, azada steak, beans, rice, lettuce, tomato, onions, cilantro, cheese, and sour cream.",
      },
    ],
  },
  {
    id: "tamales-soups",
    title: "Tamales & Soups",
    items: [
      {
        name: "Tamales — Red Pork or Green Chicken",
        emoji: "🫔",
        price: "$3.50",
        description:
          "Homemade tamales steamed in corn husks — choose red pork or green chicken.",
      },
      {
        name: "Menudo",
        emoji: "🍲",
        price: "$12.00",
        description:
          "Traditional tripe soup slow-simmered with hominy, chiles, and warm spices.",
      },
      {
        name: "Pozole",
        emoji: "🥣",
        price: "$12.00",
        description:
          "Hearty hominy and pork soup garnished with cabbage, radish, and lime.",
      },
    ],
  },
  {
    id: "sides-salads",
    title: "Sides & Salads",
    items: [
      {
        name: "Taco Salad",
        emoji: "🥗",
        price: "$7.00",
        description:
          "Crisp lettuce topped with seasoned meat, cheese, tomato, and sour cream in a fried tortilla bowl.",
      },
      {
        name: "Nachos with Chili",
        emoji: "🧀",
        price: "$9.00",
        description:
          "Crispy tortilla chips loaded with savory chili, melted cheese, and fresh toppings.",
      },
      {
        name: "Torta — Steak Sandwich",
        emoji: "🥖",
        price: "$12.00",
        description:
          "Mexican-style steak sandwich on a soft telera roll with avocado, beans, and fresh fixings.",
      },
      {
        name: "Quesadillas",
        emoji: "🫓",
        price: "$7.00",
        description:
          "Grilled flour tortilla filled with melted cheese and your choice of filling.",
      },
      {
        name: "Tostadas",
        emoji: "🫓",
        price: "$4.00",
        description:
          "Crispy flat corn tortilla topped with beans, meat, lettuce, cheese, and salsa.",
      },
      {
        name: "Enchiladas",
        emoji: "🍽️",
        price: "$12.00",
        description:
          "Corn tortillas rolled and filled, smothered in rich enchilada sauce and melted cheese.",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      {
        name: "Pepsi",
        emoji: "🥤",
        price: "$1.00",
        description: "Ice-cold fountain soda.",
      },
      {
        name: "Diet Pepsi",
        emoji: "🥤",
        price: "$1.00",
        description: "Ice-cold fountain soda.",
      },
      {
        name: "Mountain Dew",
        emoji: "🟡",
        price: "$1.00",
        description: "Ice-cold fountain soda.",
      },
      {
        name: "Sprite",
        emoji: "🟢",
        price: "$1.00",
        description: "Ice-cold fountain soda.",
      },
      {
        name: "Coke",
        emoji: "🥤",
        price: "$1.00",
        description: "Ice-cold fountain soda.",
      },
      {
        name: "Diet Coke",
        emoji: "🥤",
        price: "$1.00",
        description: "Ice-cold fountain soda.",
      },
      {
        name: "Bottled Water",
        emoji: "💧",
        price: "$1.00",
        description: "Refreshing bottled water.",
      },
      {
        name: "Lemonade",
        emoji: "🍋",
        price: "$1.00",
        description: "Fresh, tangy lemonade served cold.",
      },
    ],
  },
  {
    id: "jarritos",
    title: "Jarritos",
    items: [
      {
        name: "Mango",
        emoji: "🥭",
        price: "$2.50",
        description: "Imported Mexican soda — sweet tropical mango.",
      },
      {
        name: "Fruit Punch",
        emoji: "🍹",
        price: "$2.50",
        description: "Imported Mexican soda — bold fruit punch flavor.",
      },
      {
        name: "Pineapple",
        emoji: "🍍",
        price: "$2.50",
        description: "Imported Mexican soda — bright, refreshing pineapple.",
      },
      {
        name: "Strawberry",
        emoji: "🍓",
        price: "$2.50",
        description: "Imported Mexican soda — sweet strawberry.",
      },
      {
        name: "Mandarin",
        emoji: "🍊",
        price: "$2.50",
        description: "Imported Mexican soda — citrusy mandarin orange.",
      },
      {
        name: "Lime",
        emoji: "🍈",
        price: "$2.50",
        description: "Imported Mexican soda — zesty lime.",
      },
      {
        name: "Tamarind",
        emoji: "🟤",
        price: "$2.50",
        description: "Imported Mexican soda — tangy-sweet tamarind.",
      },
      {
        name: "Sangria",
        emoji: "🍷",
        price: "$2.50",
        description: "Imported Mexican soda — fruity sangria flavor.",
      },
    ],
  },
];

export const categoryNav = menuCategories.map(({ id, title }) => ({
  id,
  label: title,
}));
