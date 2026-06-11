const getMaxSolution = (n) => {
    const unitArr = [
        { name: 't', u: 5, e: 1500 },
        { name: 'p', u: 4, e: 1000 },
        { name: 'c', u: 10, e: 2000 }
    ];

    const obj = {
        't': {
            count: 0,
            maxProfit: 0
        }, 'p': {
            count: 0,
            maxProfit: 0
        }, 'c': {
            count: 0,
            maxProfit: 0
        }
    }

    let maxProfit = 0

    for (let i = 0; i < unitArr.length; i++) {
        const unit = unitArr[i].u;
        let currentTime = 0;
        while (currentTime + unit <= n) {
            currentTime += unit;
            const profit = (n - currentTime) * unitArr[i].e;
            obj[unitArr[i].name].maxProfit += profit
            obj[unitArr[i].name].count++;
        }
        if (obj[unitArr[i].name].maxProfit > maxProfit) {
            maxProfit = obj[unitArr[i].name].maxProfit;
        }
    }

    const possibilities = []
    Object.entries(obj).reduce((acc, [name, valueObj]) => {
        const obj = { 't': 0, 'p': 0, 'c': 0}
        if (valueObj.maxProfit === maxProfit) {
            obj[name] += valueObj.count;
            possibilities.push(obj)
        }
    }, {})

    return possibilities;
}

getMaxSolution(13)