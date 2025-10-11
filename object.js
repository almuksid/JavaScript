const AlMuksid = {
    fName : 'Al',
    lName : 'Muksid',
    age : 27,
    gender : 'Male',
    job : 'Web App Developer',
    generation : 'Zen Z',
    friends : ['Nepu', 'Anik', 'Rik'],
    hasDriversLicense : true
}
console.log(AlMuksid)
console.log(AlMuksid.fName);
console.log(AlMuksid.lName);

const nameKey = 'Name';
console.log(AlMuksid['f' + nameKey]);
console.log(AlMuksid['l' +nameKey]);

const interestedIn = prompt(`What do you want to know about about ${AlMuksid.fName} ${AlMuksid.lName}? Choose between fname, lname, age, gender, job, generation.`)

console.log(typeof interestedIn)
console.log(AlMuksid[interestedIn]) // prompt provite a string

if(AlMuksid[interestedIn]){
    console.log(interestedIn + ": " + AlMuksid[interestedIn] )
}else{
    console.log("Invalid syntext, you need to choose between fname, lname, age, gender, job, generation.`")
}

//Accept to the challenge
console.log(`${AlMuksid.fName} ${AlMuksid.lName} has ${AlMuksid.friends.length} friends, and his best friend is called ${AlMuksid.friends[0]}. `)

