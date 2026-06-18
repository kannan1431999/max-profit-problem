function getMaxSolution(n) {
  const all = [];

  for (let t = 0; t * 5 <= n; t++) {
    for (let p = 0; t * 5 + p * 4 <= n; p++) {
      for (let c = 0; t * 5 + p * 4 + c * 10 <= n; c++) {
        let time = 0;
        let money = 0;
        for (let i = 0; i < t; i++) {
          time += 5;
          money += (n - time) * 1500;
        }
        for (let i = 0; i < p; i++) {
          time += 4;
          money += (n - time) * 1000;
        }
        for (let i = 0; i < c; i++) {
          time += 10;
          money += (n - time) * 2000;
        }

        all.push({ t, p, c, time, money });
      }
    }
  }

  const best = Math.max(...all.map((x) => x.money));
  const ans = all
    .filter((x) => x.money === best && x.time < n)
    .map((x) => ({ T: x.t, P: x.p, C: x.c }));

  return { maxEarnings: best, bestSolution: ans };
}

console.log(getMaxSolution(7));
console.log(getMaxSolution(8));
console.log(getMaxSolution(13));
console.log(getMaxSolution(49));
