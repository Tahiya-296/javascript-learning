//6. Sort an array of objects by price from highest to lowest. 

const products = [
{ name: "Books", price: 410},
{ name: "Canvas", price: 1200},
{ name: "Charcoal", price: 700},
{ name: "ArtBook", price: 670}
];

products.sort((a,b) => b.price - a.price);
console.log(products);
