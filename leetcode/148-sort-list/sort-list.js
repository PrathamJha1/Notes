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

function getMiddle(head){
    let slow = head
    let fast = head
    while(fast != null && fast.next != null && fast.next.next != null){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}
var sortList = function(head) {
    function mergeSort(head){
        if(head === null || head.next === null){
            return head
        }
        let mid = getMiddle(head)
        let leftHead = head
        let rightHead = mid.next
        mid.next = null
        const left = mergeSort(leftHead)
        const right = mergeSort(rightHead)
        return merge(left,right)
    }

    function merge(left,right){
        let newHead = new ListNode()
        const dummy = newHead
        while(left != null && right != null){
            if(left.val < right.val){
                newHead.next = left
                left = left.next
            }
            else{
                newHead.next = right
                right = right.next
            }
            newHead = newHead.next
        }
        if(left){
            newHead.next = left
        }
        if(right){
            newHead.next = right
        }
        return dummy.next
    }
    return mergeSort(head)
};