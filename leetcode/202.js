// 快乐数

var isHappy = function(n) {
    let res = sum(n)
    let obj = {}
    while (res !==1) {
        if (obj[res]) return false
        obj[res] = 1
        res = sum(res)
    }
    return true
    function sum (n) {
        n = n + ' '
        var num = 0
        for (let number of n) {
           num += number * number 
        }
        return num
    }
};