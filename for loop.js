// For Loop

for(let rep = 1; rep<=10; rep++){
    console.log(`Lifting weight repitition ${rep} 🏋️‍♂️. `)
}

const language = ["JavaScript", "Python", "C++", ["HTML", "CSS", "Bootstrap"], true, 2000];

const types = []

for(let i = 0; i < language.length; i++ ){
    console.log(language[i], typeof language[i]); // Reading for language array
    types[i] = typeof language[i]; // Filling type array
}
console.log(types)

const year = [1995, 2002, 1986, 1991]

const age = []

for(let i = 0; i < year.length; i++){
    age.push(2043-year[i]); // Push method
}
console.log(age);

// Break and Continue

for(let i = 0; i < language.length; i++ ){
    if(typeof language[i] !== 'string') break;
    // if(typeof language[i] === 'number') continue;
    console.log(language[i], typeof language[i]); 
}
console.log(types)
