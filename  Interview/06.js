// 从头到尾打印链表

var reversePrint = function(head) {
    if (!head) return []
    var arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    return arr.reverse()
};