var length = 20;

function count()
{
    console.log(this.length);
}

const data = [count,"A",101];

data[0]("Mohit") // 3

// when function passed into array, this points to that particular array




