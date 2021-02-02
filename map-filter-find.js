const numbers = [3, 4, 5, 6, 7];
const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

console.log(output);

const result = numbers.map(function(element){
    return element * element;    
})
console.log(result);


//Or

const result2 = numbers.map(x => x * x);
console.log(result2);

//Filter
const result3 = numbers.filter(x => x > 5)
console.log(result3);

//Find
const result4 = numbers.find(x => x > 5)
console.log(result4);