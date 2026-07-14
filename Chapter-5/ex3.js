//3. Write a function max3(a, b, c) that returns the largest of three numbers without using Math.max.

function max3(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}
console.log(max3(10, 25, 15)); // 25
console.log(max3(50, 20, 30)); // 50
console.log(max3(5, 8, 12));   // 12
