let countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// Task1
// let a = prompt("Random sifrenin uzunlugunu girin:")

// function randomStr (length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     for( var i=0; i<length; i++) {
//         result+= characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }
// console.log(randomStr(a));

// Task3
// function randomRGB () {
//     var rgb = 'rgba(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';
//     return rgb;
// }
// console.log(randomRGB());

// Task4
// let upperArr = countries.map((name) => name.toLocaleUpperCase());
// console.log(upperArr);

// Task5
// let lengthArrElements = countries.map(name => name.length);
// console.log(lengthArrElements);

// Task6
// let firstLetter = countries.map(name => name.substring(0,3).toLocaleUpperCase());
// let lengthArrElements = countries.map(name => name.length);
// let newArr = [];
// for(let i in countries) {
//     newArr.push(countries[i], firstLetter[i], lengthArrElements[i])
// }
// console.log(newArr)

// Task7
// var newArr = [];
// for(let i in countries) {
//     if (countries[i].includes("land")) {
//         newArr.push(countries[i]);
//     }
// }
// console.log(newArr);

// Task10
// var newArr = [];
// for (let i in countries) {
//   if (countries[i].length == 5) {
//     newArr.push(countries[i]);
//   }
// }
// console.log(newArr);

// Task11
// let word='';
// for (let i=0; i< webTechs.length; i++) {
//     if(word.length< webTechs[i].length) {
//         word = webTechs[i];
//     }
// }
// console.log(word)

// Task16
// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
// var mergeArr = fullStack[0].concat(fullStack[1]);

// for(let i in mergeArr){
//     console.log(mergeArr[i]);
// }
