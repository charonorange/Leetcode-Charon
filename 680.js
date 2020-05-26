// 验证回文字符串II

var validPalindrome = function(s, num = 1) {
    let left = 0
    let right = s.length - 1
    while(left < right){
      if (s[left] === s[right]) {
        left++
        right--
      } else {
        if(num > 0){
          num--
          break
        } else {
          return false
        }
      } 
    }
    s = s.slice(left, right + 1)
    if(num && s.length < 3 || s.length < 2) return true
    let first = s.slice(1)
    let last = s.slice(0,  -1)
    return validPalindrome(first, 0) || validPalindrome(last, 0)
  };


// 我觉得这个思路ok的就是超出时间限制的了 暴力了暴力了
var validPalindrome = function(s) {
    //  先判断本身 可不可以是回文
    if (s.split('').reverse().join('') == s) return true

    // 遍历删除每一个
    let maxLength = Math.floor(s.length)
    var isRight = false
    var newS = s.split('')
    for (var i = 0; i < maxLength; i++ ){
        let a = [].concat(newS)
        let b = [].concat(newS)
        a.splice(i,1)
        b.splice(i,1)
        if (a.reverse().join('') == b.join('')) {
            isRight = true
            break;
        }
    }
    return isRight
};