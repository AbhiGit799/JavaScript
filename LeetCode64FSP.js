/* 

Fast And Slow Pointer
======================


I used the Fast & Slow Pointer approach, also called Floyd's Cycle Detection Algorithm.

The approach

We maintain two pointers:

let slow = head;
let fast = head;

Then:

slow = slow.next;       // moves 1 step
fast = fast.next.next;  // moves 2 steps

If:

slow === fast

then a cycle exists.



Approach: Fast & Slow Pointers
Technique: Two Pointers
Algorithm: Floyd's Cycle Detection
Time: O(n)
Space: O(1)



*/



var hasCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }

    }

    return false;
};


