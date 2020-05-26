// 两数之和

// hashMap
var twoSum = function(nums, target) {
    let temp = []
    for (let i = 0; i < nums.length; i++) {
        let dif = target-nums[i]
        if (temp[dif] !== undefined) {
        return [temp[dif], i]
        }
        temp[nums[i]] = i;
    }
};

// 暴力
var twoSum = function(nums, target) {
    var numbs = []
    for (var i = 0; i < nums.length; i ++) {
        for (var j = 1; j < nums.length; j++ ) {

               if (i!==j && nums[i] + nums[j] === target && numbs.indexOf(i) < 0 && numbs.indexOf(j) < 0) {
                   numbs.push(i)
                   numbs.push(j)
                 }
        }
    }
    return numbs
};