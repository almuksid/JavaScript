const calcInd = (ind) => {
    const date = 2025 - ind;
    return date;
}

const BangladeshInd = calcInd(1971);
const PakistanInd = calcInd(1947);
const IndiaInd = calcInd(1947);



console.log(BangladeshInd, PakistanInd, IndiaInd);