function subarraySum(nums: number[], k: number): number {



    let preSum: number[] = new Array(nums.length);

    preSum[0] = nums[0];

    let frq = new Map<number, number>();
    frq.set(0, 1);
    frq.set(preSum[0], (frq.get(preSum[0]) || 0) + 1);

    let ans: number = 0;

    if (nums[0] == k) {
        ans++;
    }

    for (let i: number = 1; i < nums.length; i++) {

        preSum[i] = preSum[i - 1] + nums[i];
        ans += frq.get(preSum[i] - k) || 0;
        frq.set(preSum[i], (frq.get(preSum[i]) || 0) + 1);



    }

    console.log(preSum);
    console.log(frq);




    return ans;








};