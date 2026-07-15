//2. Use map to convert an array of taka amounts into strings like '450 BDT'. 

const amounts = [450, 1200, 75];

const amountsInBDT = amounts.map((amount) => amount + " BDT");

console.log(amounts);
console.log(amountsInBDT);
