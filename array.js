const language = ["JavaScript", "Python", "C++"]
console.log(language)

const jsReleaseDt = new Array(1995, 1996, 1997, 2009, 2015, 2016, 2017)
console.log(jsReleaseDt) 

console.log(jsReleaseDt[0]) 
console.log(jsReleaseDt[4]) 
console.log(jsReleaseDt.length)
console.log(jsReleaseDt[jsReleaseDt.length-1]) 

language[2] = "C"
console.log(language) 

const newLan = [language, "C++", "C#"]
console.log(newLan) 

const calcJsAge = function(birthYear){
    return 2043 - birthYear;
}

const jsReleaseDate = new Array(1995, 1996, 1997, 2009, 2015, 2016, 2017)

let jsAge1 = calcJsAge(jsReleaseDate[0])
let jsAge2 = calcJsAge(jsReleaseDate[1])
let jsAge3 = calcJsAge(jsReleaseDate[jsReleaseDate.length -1])
console.log(jsAge1, jsAge2, jsAge3)

const jsAge = [calcJsAge(jsReleaseDate[0]), calcJsAge(jsReleaseDate[1]), calcJsAge(jsReleaseDate[jsReleaseDate.length - 1])]
console.log(jsAge)


// Array method

const proLan = ['Python', 'JavaScript', 'C'];
console.log(proLan);

proLan.push('C#');      // Last
console.log(proLan);

proLan.unshift('C++');    //First
console.log(proLan);

proLan.pop();           //Last
console.log(proLan);

proLan.shift();         //First
console.log(proLan);

console.log(proLan.indexOf('Python'));
console.log(proLan.indexOf('C++'));

console.log(proLan.includes('Python'));
console.log(proLan.includes('C'));

proLan.push(43); //Just call the push method to add a number.
console.log(proLan.includes('43')); //Return Boolian
console.log(proLan.includes(43));

if(proLan.includes('Python')){
    console.log("Python exists in the programming languages.");
}