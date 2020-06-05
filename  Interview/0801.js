// 三步问题

//动态规划
var waysToStep = function(n) {
    let m = 1e9+7
    let arr = [0,1,2,4]
    for(let i = 4; i<n+1; i++){
        arr[i] = (arr[i-1] + arr[i-2] + arr[i-3])%m
    }
    return arr[n]
};