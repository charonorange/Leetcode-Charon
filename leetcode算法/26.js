// 删除排序数组中的重复项

var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== i) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};