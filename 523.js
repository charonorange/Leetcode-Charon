// 连续子数组和

var checkSubarraySum = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            sum += nums[j]
            if(sum % k == 0) {
                return true;
            } else if(k == 0 && sum == 0) {
                return true;
            }
        }
    }
    return false;
};