// 判定字符是否唯一

var isUnique = function(astr) {
    const arr = astr.split('').sort()
    for (var i = 0; i< arr.length; i++) {
        if (arr[i] === arr[ i + 1]){
            return false
        }
    }
    return true
};



var isUnique = function(astr) {
    return new Set(astr).size==astr.length
};