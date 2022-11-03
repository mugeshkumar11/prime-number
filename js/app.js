

//prime number

// var input = 15;
// var number = true;
// if (input===1){
//   console.log("not a odd and even")
// }else if(input>1){
// for(let i=2; i<input; i++){
//   if(input % i === 0){
//     number = false;
//   }
// }
// }
// if(number===true){
//   console.log("its a prime number")
// }else{
//   console.log("its not prime number");
// }


// program to print prime numbers between the two numbers

var input = 20;

for(let i=2; i<=input; i++){
   var rem = (i/2)
  var prime = true;
  for(let j=2; j<=rem; j++){
    if(i%j==0){
      prime = false
      break;
    }
  }

  if(prime==true){
    console.log("this is a prime",i);

  }else{
    console.log("not a prime number",i);
  }
}