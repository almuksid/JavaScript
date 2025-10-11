const calcTip = (bills) => {
    const tips = bills>=50 && bills<=300 ? bills * .15 : bills * .2 ;
    return tips;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ];

console.log(total);
