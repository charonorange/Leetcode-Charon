// 有效的完全平方数

// 暴力
var isPerfectSquare = function(num) {
    if(num === 1) return true
    for (var i = 0, len = num/2; i <= len; i++) {
        if (i * i === num) {
            return true
        }
    }
    return false
};

//二分
var isPerfectSquare = function(num) {
    let left = 1;
    let right = num;
    while (left <= right) {
        let mid = parseInt((left+right)/2);
        let product = mid * mid;
        if (product === num) {
            return true;
        } else if (product > num) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    return false;
};