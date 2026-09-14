// Definition for singly-linked list node
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// let dummy = new ListNode(-1);
// let current = dummy;
// console.log(dummy);
// console.log(current);


// let dummy1 = new ListNode(1);
// let current1 = dummy1;
// console.log(dummy1);
// console.log(current1);

// dummy.next = dummy1;

// console.log(dummy);

//  the general rule is: use .next to connect one node to another.

/* 
🔎 What’s happening
Ans =>
dummy has value -1.
By setting dummy.next = dummy1, you’re linking the first node to the second.
Now dummy is the head of a linked list: -1 → 1.
If you want to keep extending the chain, you can keep assigning .next:

*/

// 21. Merge Two Sorted Lists

/* 
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

*/


var mergeTwoLists = function(list1, list2) {
  let dummy = new ListNode(-1);
  let current = dummy;
  while(list1!=null && list2!=null)
  {
    if(list1.val<=list2.val)
    {
        current.next = list1;
        list1 = list1.next;

    }else
    {
        current.next = list2;
        list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 !== null ? list1 : list2;
  return dummy.next;
};


function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let merged = mergeTwoLists(list1, list2);
printList(merged);


/* 

new ListNode(1, new ListNode(2, new ListNode(4)));

🔎 Step‑by‑Step Expansion
1) Innermost call
new ListNode(4)

Creates a node with val = 4 and next = null.
This is the tail node.

2) Next call
new ListNode(2, new ListNode(4))

Creates a node with val = 2.

Its next points to the node we just built (4 → null).

Representation:

2 → 4 → null



3) Outer call
new ListNode(1, new ListNode(2, new ListNode(4)))

Creates a node with val = 1.

Its next points to the node chain 2 → 4 → null.

Final representation:

1 → 2 → 4 → null


4) 📊 Visual Diagram
Head
 ↓
[1] → [2] → [4] → null


So this single line constructs a linked list of three nodes:

Head node with value 1

Next node with value 2

Tail node with value 4


*/