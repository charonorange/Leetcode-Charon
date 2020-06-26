// 最长重复子数组

var findLength = function(A, B) {
    let resMax = 0;
    let n1 = A.length,n2 = B.length;
    let dp = Array.from(new Array(n1 + 1),() => new Array(n2 + 1).fill(0));
    for(let i = 1;i <= n1;i++){
        for(let j = 1;j <= n2;j++){
            if(A[i - 1] === B[j - 1]){
                dp[i][j] = dp[i-1][j-1] + 1;
                resMax = Math.max(resMax,dp[i][j]);
            }
        }
    }
    return resMax;
};
