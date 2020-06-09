// 替换空格

// 正则
var replaceSpace = function(s) {
    return s.replace(new RegExp(/(\s)/g), '%20')
};