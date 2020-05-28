// 旋转数组

var rotate = function(nums, k) {
    for (let i = 0; i< k;i++){
        nums.splice(0,0, nums[nums.length-1])
        nums.splice(nums.length-1,1)
    }
    return nums
};