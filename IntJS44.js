function showMarks(marks)
{
    const msg = marks || "No Marks provided";
    console.log(`Grade ${msg}`);
}

showMarks(90) // Grade 90
showMarks() // Grade No Marks provided
showMarks(0) // Grade No Marks provided
showMarks(40) //  Grade 40

console.log("\n");


function displayMarks(marks)
{
    const msg = marks ?? "No Marks provided";
    console.log(`Grade ${msg}`);
}

displayMarks(90)   // displayMarks()
displayMarks()     // Grade No Marks provided
displayMarks(0)    // Grade 0
displayMarks(40)   // Grade 40
