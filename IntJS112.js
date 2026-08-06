// how to check that given array is sorted or not in javascript?


function isSortedAscending(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]>arr[i+1])  // ✅ Ascending Order Check
        {
            return false;
        }
    }
    return true;
}

console.log(isSortedAscending([1,2,3,4,5]));  // true

console.log(isSortedAscending([11,2,30,4,5])); // false

// ✅ Descending Order Check
// (arr[i] < arr[i + 1])




