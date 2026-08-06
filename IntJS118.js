// Capitalize first letter

const str = "my name is mohit"

const result = str.split(" ")
              .map(w=>w[0].toUpperCase()+w.slice(1))
              .join(" ");

console.log(result);



