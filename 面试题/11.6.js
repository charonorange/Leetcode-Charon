// 跳水板 

// 数学思维
var divingBoard = function(shorter, longer, k) {
    if (k === 0) return []
    var array = []
    for (var i = 0; i<= k; i++){
        array.push(i * longer + (k-i) * shorter)
    } 
    return Array.from(new Set(array.sort((a,b) => a - b)))
};