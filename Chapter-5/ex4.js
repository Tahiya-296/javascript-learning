//4. Rewrite your FizzBuzz from Chapter 4 as a function fizzbuzz(limit).

function fizzbuzz(limit){
    if(limit%3===0 && limit%5===0){
        return "FizzBuzz";
    }
    else if(limit%3===0){
        return "Fizz";
    }
    else if(limit%5===0){
        return "Buzz";
    }
    else{
        return limit;
    }
}
 for( let i=1; i<=30; i++){
     console.log(fizzbuzz(i));
 }
