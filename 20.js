// 有效的括号

var isValid = function (s) {
    while (s.length) {
        var temp = s;
        s = s.replace('()', '');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
        if (s == temp) return false
    }
    return true;
};

// ---------------------------------------------

var isValid = function(s) {
    var arr = []
    if (s.length%2) return false
    for (var i = 0; i< s.length; i++){
            let item = s[i]
            switch(item) {
                case "(": {
                    arr.push(item)
                    break;
                }
                case "{": {
                    arr.push(item)
                    break;
                }
                case '[': {
                    arr.push(item)
                    break;
                }
                case ')': {
                    if (arr.pop() !== '(') return false
                    break;
                }
                case '}': {
                      if (arr.pop() !== '{') return false
                      break
                }
                case ']': {
                      if (arr.pop() !== '[') return false
                      break
                }
            }
        }
        return !arr.length
    };