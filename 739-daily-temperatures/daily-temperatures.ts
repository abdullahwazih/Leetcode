function dailyTemperatures(temperatures: number[]): number[] {

    const indexMap = new Map<number, number[]>();

    temperatures.forEach((value, index) => {

        if (!indexMap.has(value)) {
            indexMap.set(value, []);
        }

        indexMap.get(value)!.push(index);
    });

    //console.log(indexMap);


    let days: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {

        let ans = temperatures.length + 1;

        for (let j = temperatures[i] + 1; j <= 100; j++) {

            if (indexMap.has(j)) {

                const indexes = indexMap.get(j);
                //console.log(j, indexes);

                if (indexes) {

                    let l = 0, r = indexes.length - 1;

                    if (indexes[r] > i) {
                        //console.log("Condition", indexes[r], i);
                        while (l <= r) {

                            let mid = Math.floor((l + r) / 2);

                            if (indexes[mid] <= i) {
                                l = mid + 1;
                            }
                            else {
                                ans = Math.min(ans, indexes[mid] - i);
                                r = mid - 1;
                            }
                        }
                    }
                }
            }
        }

        ans === temperatures.length + 1 ? days.push(0) : days.push(ans);
    }

    return days;
};