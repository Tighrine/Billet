function rendreLaMonnaie(num) {

    if ([1, 3].includes(num)) return null;

    else if ([2, 5, 10].includes(num)) return [num];

    let bills = [];

    for (const item of [10, 5, 2]) {
        if (item > num)
            continue;
        else if (item <= num) {
            let res = rendreLaMonnaie(num - item)
            if (res !== null) {
                bills.push(...res, item);
                return bills;
            }
        }
    }
}

console.log(rendreLaMonnaie(11));