// 第三大的数

// byMyself
var thirdMax = function(nums) {
    var map = new Map()
    var max = 0
    nums.sort((a,b) => b - a)
    if (Array.from(new Set(nums)).length < 3) {
        var arr = Array.from(new Set(nums))
        console.log(arr)
        return arr[0]
    }
    for(var i = 0; i< nums.length; i++ ){
        if (!map.get(nums[i])) {
            map.set(nums[i], 1)
            max = nums[i]
        } else {
            map.set(nums[i], map.get(nums[i]) + 1)
            max = nums[i]
        }
        if (!(map.size < 3) && map.get(max) === 1) {
            return max
        } else {
            continue
        }
    }
};


var a = function () {
    var arr = 333
    function test () {
       return  arr + 1
    }
}