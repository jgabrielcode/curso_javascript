const recebeNum = (num)=>{
    
    if(num%3 == 0 && num%5 == 0) return "FizzBuzz"
    if(num%5 == 0) return "Buzz"
    if(num%3 == 0) return "Fizz"

    return num

}

for(let i = 0; i <= 50; i++){
    console.log(i,recebeNum(i))
}

