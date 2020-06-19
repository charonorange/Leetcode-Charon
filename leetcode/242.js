
// 有效的字母异位
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
 };