let rep = 0;

while(rep < 10){
    console.log(`Weight lifting repetition ${rep} `);
    rep++;
}

let dice =Math.ceil(Math.random() * 10);

while(dice !== 7){
    console.log(`You role a ${dice}`);
    dice =Math.ceil(Math.random() * 10);
    if(dice == 7) console.log(`Loop is about to end ${dice}`);
}

let newDice =Math.ceil(Math.random() * 10);

if(newDice == 7){
    console.log(`That is accepted ${newDice}`);
}
else{
    console.log(`You are wrong ${newDice}`);
}
console.log(dice);