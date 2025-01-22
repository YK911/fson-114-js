function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const item of products) {
    if (item.name === productName) {
      return item.price * item.quantity;
    }
  }

  return `"Product ${productName} not found!"`;
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Droid"));
console.log(calculateTotalPrice("Grip"));
console.log(calculateTotalPrice("Scanner"));

// повертає "Product Blaster not found!"
// повертає 5200
// повертає 2800
// повертає 10800
// повертає 8100
