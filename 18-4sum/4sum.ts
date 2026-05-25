function fourSum(nums: number[], target: number): number[][] {

    function areUnique(a: number, b: number, c: number): boolean {
        return a !== b && b !== c && a !== c;
    }

    function possible(frq: Map<number, number>, i: number, j: number, k: number): boolean {
        let cnd: number = target - nums[i] - nums[j] - nums[k];

        let fq = frq.get(cnd) || 0;

        if (cnd === nums[i]) fq--;
        if (cnd === nums[j]) fq--;
        if (cnd === nums[k]) fq--;

        return fq >= 1;
    }

    const frq = new Map<number, number>();
    for (const num of nums) {
        frq.set(num, (frq.get(num) || 0) + 1);
    }

    const ans: number[][] = [];
    const seen = new Set<string>();

    function makeKey(arr: number[]): string {
        return arr.sort((a, b) => a - b).join(",");
    }

    //console.log(frq);

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {

                if (areUnique(i, j, k)) {


                    let cnd = target - nums[i] - nums[j] - nums[k];


                    if (frq.get(cnd) && possible(frq, i, j, k)) {
                        //console.log(nums[i], nums[j], nums[k], cnd)
                        const quad = [
                            nums[i],
                            nums[j],
                            nums[k],
                            cnd
                        ];
                        const key = makeKey(quad);

                        if (!seen.has(key)) {
                            seen.add(key);
                            ans.push(quad);
                        }
                    }


                }
            }
        }
    }

    return ans;
}