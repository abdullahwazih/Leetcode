function firstMissingPositive(nums: number[]): number {

    let len = nums.length;

    for (let i = 0; i < len; i++) {
        nums.push(0);
    }

    for (let i = 0; i < len; i++) {

        if (nums[i] > 0 && nums[i] <= len) {


            nums[nums[i] - 1 + len] = 1;
        }

    }

    for(let i = len; i < nums.length; i++){

        if (nums[i] == 0){
            return i - len + 1;
        }
    }
    
    return len + 1;

};