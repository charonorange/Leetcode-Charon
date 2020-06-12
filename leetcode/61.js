// 旋转链表

var rotateRight = function(head, k) {
    if(!head || !head.next) {
        return head
    }
    var len = 1
    let firstNode = head
    // 计算指针的长度
    while (firstNode.next) {
        firstNode = firstNode.next
        len++
    }
    if (len === k) return head
    firstNode.next = head
    var retateLen = k > len ? k%len : k
 
    let newHead = head
    let index = 1
    while(index < len - retateLen) {
        index++
        newHead = newHead.next
    }
    let temp = newHead.next
    newHead.next = null
    return temp
};