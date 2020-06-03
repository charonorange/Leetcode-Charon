// 将每个元素替换成右侧最大元素

var replaceElements = function(arr) {
    let max = -1, res = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        res[i] = max;
        max = arr[i] > max ? arr[i] : max;
    }
    return res;
};