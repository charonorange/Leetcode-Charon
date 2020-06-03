// 移动0

// 倒叙push 0
var moveZeroes = function(nums) {
    for(let i=nums.length;i>=0;i--){
        if(nums[i] === 0){
            nums.splice(i,1);
            nums.push(0);
        }
    }
    return nums;
};

// 时间快一点
var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            if (i !== j) {
                nums[i] = 0
            }
            j++
        }
    }
}