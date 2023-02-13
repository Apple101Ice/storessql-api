let data = {
  shops: [
    { shopid: 1, name: "Sector 25, Gurgaon", rent: 28500 },
    { shopid: 2, name: "Sector 53, Gurgaon", rent: 37400 },
    { shopid: 3, name: "Greater Kailash, Delhi", rent: 63100 },
    { shopid: 4, name: "Mall of India, Noida", rent: 54200 },
  ],
  products: [
    {
      productid: 1,
      productname: "Pepsi Can",
      category: "Soft Drinks",
      description: "300ml",
    },
    {
      productid: 2,
      productname: "Pepsi PET",
      category: "Soft Drinks",
      description: "500ml",
    },
    {
      productid: 3,
      productname: "Diet Coke",
      category: "Soft Drinks",
      description: "300ml Can",
    },
    {
      productid: 4,
      productname: "Mazaa",
      category: "Soft Drinks",
      description: "500ml bottle",
    },
    {
      productid: 5,
      productname: "Dairy Milk",
      category: "Chocolate",
      description: "25 g",
    },
    {
      productid: 6,
      productname: "Fruit n Nut",
      category: "Chocolate",
      description: "60 g",
    },
    {
      productid: 7,
      productname: "Silk - Crackles",
      category: "Chocolate",
      description: "100g",
    },
    {
      productid: 8,
      productname: "Perk",
      category: "Chocolate",
      description: "40 g",
    },
  ],
  purchases: [
    {
      purchaseid: 1,
      shopid: 1,
      productid: 1,
      quantity: 10,
      price: 25,
    },
    {
      purchaseid: 2,
      shopid: 1,
      productid: 2,
      quantity: 15,
      price: 32,
    },
    {
      purchaseid: 3,
      shopid: 1,
      productid: 3,
      quantity: 5,
      price: 27,
    },
    {
      purchaseid: 4,
      shopid: 1,
      productid: 4,
      quantity: 20,
      price: 31,
    },
    {
      purchaseid: 5,
      shopid: 2,
      productid: 5,
      quantity: 10,
      price: 8,
    },
    {
      purchaseid: 6,
      shopid: 2,
      productid: 5,
      quantity: 15,
      price: 8,
    },
    {
      purchaseid: 7,
      shopid: 2,
      productid: 5,
      quantity: 10,
      price: 8,
    },
    {
      purchaseid: 8,
      shopid: 2,
      productid: 5,
      quantity: 5,
      price: 8,
    },
    {
      purchaseid: 9,
      shopid: 2,
      productid: 8,
      quantity: 20,
      price: 12,
    },
    {
      purchaseid: 10,
      shopid: 2,
      productid: 8,
      quantity: 15,
      price: 11,
    },
    {
      purchaseid: 11,
      shopid: 2,
      productid: 8,
      quantity: 10,
      price: 12,
    },
    {
      purchaseid: 12,
      shopid: 2,
      productid: 6,
      quantity: 5,
      price: 40,
    },
    {
      purchaseid: 13,
      shopid: 1,
      productid: 1,
      quantity: 20,
      price: 25,
    },
    {
      purchaseid: 14,
      shopid: 1,
      productid: 2,
      quantity: 20,
      price: 32,
    },
    {
      purchaseid: 15,
      shopid: 1,
      productid: 3,
      quantity: 30,
      price: 27,
    },
    {
      purchaseid: 16,
      shopid: 1,
      productid: 4,
      quantity: 40,
      price: 31,
    },
    {
      purchaseid: 17,
      shopid: 3,
      productid: 8,
      quantity: 20,
      price: 12,
    },
    {
      purchaseid: 18,
      shopid: 3,
      productid: 8,
      quantity: 15,
      price: 11,
    },
    {
      purchaseid: 19,
      shopid: 4,
      productid: 8,
      quantity: 10,
      price: 12,
    },
    {
      purchaseid: 20,
      shopid: 4,
      productid: 6,
      quantity: 5,
      price: 40,
    },
    {
      purchaseid: 21,
      shopid: 3,
      productid: 1,
      quantity: 10,
      price: 25,
    },
    {
      purchaseid: 22,
      shopid: 3,
      productid: 2,
      quantity: 15,
      price: 32,
    },
    {
      purchaseid: 23,
      shopid: 4,
      productid: 3,
      quantity: 5,
      price: 27,
    },
    {
      purchaseid: 24,
      shopid: 1,
      productid: 4,
      quantity: 20,
      price: 31,
    },
    {
      purchaseid: 25,
      shopid: 2,
      productid: 5,
      quantity: 10,
      price: 8,
    },
    {
      purchaseid: 26,
      shopid: 4,
      productid: 5,
      quantity: 15,
      price: 8,
    },
    {
      purchaseid: 27,
      shopid: 2,
      productid: 5,
      quantity: 10,
      price: 8,
    },
    {
      purchaseid: 28,
      shopid: 1,
      productid: 5,
      quantity: 5,
      price: 8,
    },
    {
      purchaseid: 29,
      shopid: 3,
      productid: 8,
      quantity: 20,
      price: 12,
    },
    {
      purchaseid: 30,
      shopid: 1,
      productid: 8,
      quantity: 15,
      price: 11,
    },
    {
      purchaseid: 31,
      shopid: 2,
      productid: 8,
      quantity: 10,
      price: 12,
    },
    {
      purchaseid: 32,
      shopid: 2,
      productid: 6,
      quantity: 5,
      price: 40,
    },
    {
      purchaseid: 33,
      shopid: 2,
      productid: 1,
      quantity: 20,
      price: 25,
    },
    {
      purchaseid: 34,
      shopid: 1,
      productid: 2,
      quantity: 20,
      price: 32,
    },
    {
      purchaseid: 35,
      shopid: 3,
      productid: 3,
      quantity: 30,
      price: 27,
    },
    {
      purchaseid: 36,
      shopid: 4,
      productid: 4,
      quantity: 40,
      price: 31,
    },
    {
      purchaseid: 37,
      shopid: 2,
      productid: 8,
      quantity: 20,
      price: 12,
    },
    {
      purchaseid: 38,
      shopid: 3,
      productid: 8,
      quantity: 15,
      price: 11,
    },
    {
      purchaseid: 39,
      shopid: 4,
      productid: 8,
      quantity: 15,
      price: 12,
    },
    {
      purchaseid: 40,
      shopid: 4,
      productid: 6,
      quantity: 5,
      price: 40,
    },
    {
      purchaseid: 41,
      shopid: 3,
      productid: 1,
      quantity: 10,
      price: 25,
    },
    {
      purchaseid: 42,
      shopid: 3,
      productid: 2,
      quantity: 15,
      price: 32,
    },
    {
      purchaseid: 43,
      shopid: 1,
      productid: 3,
      quantity: 5,
      price: 27,
    },
    {
      purchaseid: 44,
      shopid: 1,
      productid: 4,
      quantity: 20,
      price: 31,
    },
    {
      purchaseid: 45,
      shopid: 3,
      productid: 5,
      quantity: 10,
      price: 8,
    },
    {
      purchaseid: 46,
      shopid: 2,
      productid: 5,
      quantity: 15,
      price: 8,
    },
    {
      purchaseid: 47,
      shopid: 2,
      productid: 5,
      quantity: 10,
      price: 8,
    },
    {
      purchaseid: 48,
      shopid: 4,
      productid: 5,
      quantity: 5,
      price: 8,
    },
    {
      purchaseid: 49,
      shopid: 2,
      productid: 8,
      quantity: 20,
      price: 12,
    },
    {
      purchaseid: 50,
      shopid: 2,
      productid: 8,
      quantity: 15,
      price: 11,
    },
    {
      purchaseid: 51,
      shopid: 2,
      productid: 8,
      quantity: 10,
      price: 12,
    },
    {
      purchaseid: 52,
      shopid: 4,
      productid: 6,
      quantity: 5,
      price: 40,
    },
    {
      purchaseid: 53,
      shopid: 3,
      productid: 1,
      quantity: 20,
      price: 25,
    },
    {
      purchaseid: 54,
      shopid: 1,
      productid: 2,
      quantity: 20,
      price: 32,
    },
    {
      purchaseid: 55,
      shopid: 1,
      productid: 3,
      quantity: 30,
      price: 27,
    },
    {
      purchaseid: 56,
      shopid: 1,
      productid: 4,
      quantity: 40,
      price: 31,
    },
    {
      purchaseid: 57,
      shopid: 3,
      productid: 8,
      quantity: 20,
      price: 12,
    },
    {
      purchaseid: 58,
      shopid: 3,
      productid: 8,
      quantity: 15,
      price: 11,
    },
    {
      purchaseid: 59,
      shopid: 4,
      productid: 8,
      quantity: 10,
      price: 12,
    },
    {
      purchaseid: 60,
      shopid: 4,
      productid: 6,
      quantity: 5,
      price: 40,
    },
    {
      purchaseid: 61,
      shopid: 3,
      productid: 1,
      quantity: 10,
      price: 25,
    },
    {
      purchaseid: 62,
      shopid: 4,
      productid: 2,
      quantity: 15,
      price: 32,
    },
    {
      purchaseid: 63,
      shopid: 1,
      productid: 3,
      quantity: 5,
      price: 27,
    },
    {
      purchaseid: 64,
      shopid: 3,
      productid: 4,
      quantity: 20,
      price: 31,
    },
    {
      purchaseid: 65,
      shopid: 3,
      productid: 5,
      quantity: 10,
      price: 8,
    },
    {
      purchaseid: 66,
      shopid: 4,
      productid: 5,
      quantity: 15,
      price: 8,
    },
    {
      purchaseid: 67,
      shopid: 2,
      productid: 5,
      quantity: 10,
      price: 8,
    },
    {
      purchaseid: 68,
      shopid: 1,
      productid: 5,
      quantity: 5,
      price: 8,
    },
    {
      purchaseid: 69,
      shopid: 3,
      productid: 8,
      quantity: 20,
      price: 12,
    },
    {
      purchaseid: 70,
      shopid: 1,
      productid: 8,
      quantity: 15,
      price: 11,
    },
    {
      purchaseid: 71,
      shopid: 2,
      productid: 8,
      quantity: 10,
      price: 12,
    },
    {
      purchaseid: 72,
      shopid: 2,
      productid: 6,
      quantity: 5,
      price: 40,
    },
    {
      purchaseid: 73,
      shopid: 2,
      productid: 1,
      quantity: 20,
      price: 25,
    },
    {
      purchaseid: 74,
      shopid: 1,
      productid: 2,
      quantity: 20,
      price: 32,
    },
    {
      purchaseid: 75,
      shopid: 3,
      productid: 3,
      quantity: 30,
      price: 27,
    },
    {
      purchaseid: 76,
      shopid: 4,
      productid: 4,
      quantity: 40,
      price: 31,
    },
    {
      purchaseid: 77,
      shopid: 2,
      productid: 8,
      quantity: 20,
      price: 12,
    },
    {
      purchaseid: 78,
      shopid: 3,
      productid: 8,
      quantity: 15,
      price: 11,
    },
    {
      purchaseid: 79,
      shopid: 4,
      productid: 8,
      quantity: 15,
      price: 12,
    },
    {
      purchaseid: 80,
      shopid: 1,
      productid: 6,
      quantity: 5,
      price: 40,
    },
  ],
};

module.exports.storesData = data;