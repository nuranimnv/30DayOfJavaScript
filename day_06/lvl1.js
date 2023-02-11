// Task1
// for( var i=0; i<11; i++){
//     console.log(i);
// }

// let i = 0;
// while(i<11){
//     console.log(i);
//     i++;
// }

// do{
//     console.log(i);
//     i++;
// } while(i<11)

// Task2
// for( var i=10; i>=0; i--){
//     console.log(i);
// }

// let i = 10;
// while(i>=0){
//     console.log(i);
//     i--;
// }

// do{
//     console.log(i);
//     i--;
// } while(i>=0)

// Task3
// for( var i = 0;i<n; i++)




// for ( var i = 1; i<8; i++){
//     if(firstI == i){
//         console.log("#");
//     }
//     firstI++;
// }

// Task5
// for (var i = 1; i<11; i++){
//     console.log(i," x ", i," = ", i*i);
// }

// Task6
// for (var i = 0; i<11; i++){
//     console.log(i,i**2,i**3);
// }

// Task7
// for (var i = 0; i<= 100; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// Task8
// for (var i = 0; i<= 100; i++){
//     if(i%2){
//         console.log(i);
//     }
// }

// Task9
// for (var i = 2; i <= 100; i++) {
//     let isPrime = true;
//     for (var j = 2; j < i; j++) {
//       if (!(i % j)) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//     }
//   }

// Task10
// var j = 0;
// for (var i = 1; i<= 100; i++){
//     j+=i;
// }
// console.log(j);

// Task11
// var j = 0;
// for (var i = 0; i<= 100; i++){
//     if(i%2 == 0){
//         j+=i;
//     }
// }
// console.log(j);

// var t = 0;
// for (var i = 0; i<= 100; i++){
//     if(i%2){
//         t+=i;
//     }
// }

// console.log(t);

// Task12
// let arr = [j,t];
// console.log(arr)

// Task13
// let arr = [];
// for(var i = 0; i<5; i++){
//     arr.push(Math.floor(Math.random()*100))
// }
// console.log(arr)

// Task14
// let arr = [];
// for(var i = 0; i<5; i++){
//     if(i == (i))
//     arr.push(Math.floor(Math.random()*100))
// }
// console.log(arr);

// Task15
// function generateId(length) {
//   let id = "";
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (let i = 0; i < length; i++) {
//     id += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return id;
// }
// console.log(generateId(5));