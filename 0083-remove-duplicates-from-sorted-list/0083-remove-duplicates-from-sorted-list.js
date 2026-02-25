/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return head;
    let a = head;
    while (a){
        if (a.next && a.val === a.next.val){
            a.next = a.next.next;
        } else{
            a = a.next;
        }
    }
    return head
};