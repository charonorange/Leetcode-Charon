// 无重复符的最长子串

// bymyself
var lengthOfLongestSubstring = function(s) {
    var maxLength = 0
    var currentString = ''
    var currentIndex = 0
    for (var i = 0; i< s.length; i++) {
        if (currentString.indexOf(s[i]) === -1) {
            currentString = s.substring(currentIndex,i + 1)
            maxLength = currentString.length > maxLength ? currentString.length: maxLength
        } else {
            if (s[i-1] === s[i]) {
                currentIndex = i
                currentString = s[i]
                continue
            }
            currentIndex = currentIndex + currentString.indexOf(s[i]) + 1
            currentString = s.substring(currentIndex,i + 1)
            maxLength = currentString.length > maxLength ? currentString.length: maxLength
           
        }
    }
    return maxLength
};