// 只出现一次的数字

// 异或 需要学习
var singleNumber = function(nums) {
    let ans = 0;
    for(const num of nums) {
        ans ^= num;
    }
    return ans;
};

var singleNumber = function(nums) {
    nums = nums.sort((a, b) => {
        return a-b
    })
    for (let i = 0; i<nums.length;i+=2){
        if (nums[i] != nums[i+1]) {
            return nums[i]
        }
    }
};
