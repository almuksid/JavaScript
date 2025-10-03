// console.log("JavaScript is easy to learn")

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%

/* Write your code below. Good luck! 🙂 */
// const calcTip = function(bill) {
//     return bill >= 50 && bill <=300 ? bill * .15 : bill * .20;
// }

// const bills = [125, 555, 44]

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// const total =[ bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2], ]

// console.log(bills, tips, total);


const calcAverage = (a, b, c) => (a + b + c) / 3;

// For test data 

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins , avgKoalas){
    if (avgDolphins > 2 * avgKoalas) {
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`)
    }
    else if(avgKoalas > 2* avgDolphins){
        console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`)
    }else{
        console.log(`No team wins...`)
    }
}
checkWinner(scoreDolphins, scoreKoalas)
// Test 2
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

checkWinner(scoreDolphins2, scoreKoalas2)