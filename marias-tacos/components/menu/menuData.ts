export type MenuItem = {
  name: string;
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
        price: "$3.00",
        description:
          "Tender pork marinated in rich adobada spices, served on a warm corn tortilla.",
      },
      {
        name: "Pollo / Chicken",
        price: "$3.00",
        description:
          "Seasoned grilled chicken with fresh cilantro and onions on a corn tortilla.",
      },
      {
        name: "Chorizo / Pork Sausage",
        price: "$3.00",
        description:
          "Savory Mexican chorizo with bold, smoky flavor on a fresh tortilla.",
      },
      {
        name: "Azada / Steak",
        price: "$3.00",
        description:
          "Marinated carne asada, grilled and sliced thin on a warm corn tortilla.",
      },
      {
        name: "Lengua / Tongue",
        price: "$4.00",
        description:
          "Slow-cooked beef tongue, tender and rich, finished with fresh toppings.",
      },
      {
        name: "Cabeza / Cow Head",
        price: "$4.00",
        description:
          "Traditional braised beef cheek — succulent, flavorful, and authentically prepared.",
      },
      {
        name: "Hard Shell with Ground Beef",
        price: "$4.00",
        description:
          "Crispy hard shell filled with seasoned ground beef, lettuce, cheese, and salsa.",
      },
      {
        name: "Walking Taco",
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
        price: "$9.00",
        description:
          "Beans, rice, lettuce, tomato, onions, cilantro, cheese, and sour cream wrapped in a flour tortilla.",
      },
      {
        name: "Breakfast Burrito",
        price: "$9.00",
        description:
          "Potatoes, eggs, chorizo, and cheese — a hearty start to your morning.",
      },
      {
        name: "Texas Burrito",
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
        price: "$3.50",
        description:
          "Homemade tamales steamed in corn husks — choose red pork or green chicken.",
      },
      {
        name: "Menudo",
        price: "$12.00",
        description:
          "Traditional tripe soup slow-simmered with hominy, chiles, and warm spices.",
      },
      {
        name: "Pozole",
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
        price: "$7.00",
        description:
          "Crisp lettuce topped with seasoned meat, cheese, tomato, and sour cream in a fried tortilla bowl.",
      },
      {
        name: "Nachos with Chili",
        price: "$9.00",
        description:
          "Crispy tortilla chips loaded with savory chili, melted cheese, and fresh toppings.",
      },
      {
        name: "Torta — Steak Sandwich",
        price: "$12.00",
        description:
          "Mexican-style steak sandwich on a soft telera roll with avocado, beans, and fresh fixings.",
      },
      {
        name: "Quesadillas",
        price: "$7.00",
        description:
          "Grilled flour tortilla filled with melted cheese and your choice of filling.",
      },
      {
        name: "Tostadas",
        price: "$4.00",
        description:
          "Crispy flat corn tortilla topped with beans, meat, lettuce, cheese, and salsa.",
      },
      {
        name: "Enchiladas",
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
        description: "Ice-cold fountain soda.",
      },
      {
        name: "Diet Pepsi",
        description: "Ice-cold fountain soda.",
      },
      {
        name: "Mountain Dew",
        description: "Ice-cold fountain soda.",
      },
      {
        name: "Sprite",
        description: "Ice-cold fountain soda.",
      },
      {
        name: "Coke",
        description: "Ice-cold fountain soda.",
      },
      {
        name: "Diet Coke",
        description: "Ice-cold fountain soda.",
      },
      {
        name: "Bottled Water",
        description: "Refreshing bottled water.",
      },
      {
        name: "Lemonade",
        price: "$2.00",
        description: "Fresh, tangy lemonade served cold.",
      },
      {
        name: "Jarritos",
        price: "$3.50",
        description:
          "Authentic Mexican soda — Mango, Fruit Punch, Pineapple, Strawberry, Mandarin, Lime, Tamarind, or Sangria.",
      },
    ],
  },
];

export const categoryNav = menuCategories.map(({ id, title }) => ({
  id,
  label: title,
}));
