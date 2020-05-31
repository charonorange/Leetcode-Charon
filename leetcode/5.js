//  最长回文子串

// 中心扩散算法

var longestPalindrome = function(s) {
    let result = s[0] || "";

    // 遍历每一个字符
    for (let i = 0; i < s.length; i++) {
        for (let j = 1; j <= 2; j++) { //偶数、奇数情况的回文串
            let left = i, right = i + j;
            while(left >= 0 && right < s.length && s[left] === s[right]) {
                left--, right++; //向外扩展直到两端不相同
            };
            let length = right - left - 1; //(right - 1) - (left + 1) + 1
            if (length > result.length) {
                result = s.substr(left + 1, length);
            }
        }
    }
    return result;
};
