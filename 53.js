// 最大子序和

var maxSubArray = function(nums) {
    var preNum = nums[0]
    for (var i = 1; i < nums.length; i++) {
        nums[i] = preNum > 0 ? preNum + nums[i] : nums[i]
        preNum = nums[i]
    }
    nums.sort((a,b) => a - b)
    console.log(nums)
    return nums[nums.length-1]
};
