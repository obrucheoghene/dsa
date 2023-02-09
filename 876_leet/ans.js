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
var middleNode = function(head) {
    var lenght = 0;
    var middle = 0;
    var temp = head;

    while (temp)
    {
        lenght++;
        temp = temp.next;
    }

    middle = Math.floor(lenght / 2);
    temp = head;

    while (middle)
    {
        middle--;
        temp = temp.next;
    }
    
    return temp;
};