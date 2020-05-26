// 整数反转

var reverse = function(x) {
    let string = Math.abs(x).toString()
    let reverse = string.split('').reverse().join('')
    if (reverse > Math.pow(2, 31) - 1 ) {
        return 0
    } else if (x > 0){
        return string.split('').reverse().join('')
    } else {
        return '-'+ string.toString().split('').reverse().join('')
    }
};