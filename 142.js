// 环形链表II

var detectCycle = function(head) {
    while (head) {
        if (head.flag){
            return head
        }
        head.flag = true
        head = head.next
    }
    return null
};


// 快慢指针
var detectCycle = function(head) {
    let fast = head,
        slow = head
 
        while (fast && fast.next){
            fast = fast.next.next
            slow = slow.next
 
            if (fast === slow) {
                slow = head
                while (slow !== fast) {
                    slow = slow.next
                    fast = fast.next
                }
                return slow
            }
        }
     return null
 };