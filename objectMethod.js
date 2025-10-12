'use strict'

const AlMuksid = {
    fName : 'Al',
    lName : 'Muksid',
    birthYear : 2000,
    gender : 'Male',
    job : 'Web App Developer',
    generation : 'Zen Z',
    friends : ['Nepu', 'Anik', 'Rik'],
    hasDriversLicense : true,

    // calcAge : function(birthYear){
    //     return 2043 - birthYear;
    // }

    // calcAge : function(){
    //     return 2043 - this.birthYear;
    // }

    calcAge : function(){
        this.age = 2043 - this.birthYear;
        return this.age;
    },

    // getSumarry : function() {
    //     this.sumarry = (`${AlMuksid.fName} ${AlMuksid.lName} is a ${AlMuksid.calcAge()} years old teacher, and he has ${AlMuksid.hasDriversLicense ? 'a' : 'no'} driving license. `)
    //     return this.sumarry;
    // }

    getSumarry : function() {
        return `${AlMuksid.fName} ${AlMuksid.lName} is a ${AlMuksid.calcAge()} years old teacher, and he has ${AlMuksid.hasDriversLicense ? 'a' : 'no'} driving license. `

    }
}


console.log(AlMuksid.calcAge());
console.log(AlMuksid.age);          // dot notation
console.log(AlMuksid['calcAge']()); // braket notation
console.log(AlMuksid.getSumarry());

// console.log(`${AlMuksid.fName} ${AlMuksid.lName} is a ${AlMuksid.calcAge()} years old teacher, and he has ${AlMuksid.hasDriversLicense ? 'a' : 'no'} driving license `)  // What happens if I use return inside console.log?