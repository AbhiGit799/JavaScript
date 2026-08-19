/*

//foreach
//filter
//map
//sort
//reduce

 */

// foreach

const companies = [
  { name: "C1", category: "Finance", start: 1991, end: 1999 },

  { name: "C2", category: "Retail", start: 1982, end: 2013 },

  { name: "C3", category: "BU", start: 1993, end: 2014 },

  { name: "C4", category: "JK", start: 1984, end: 1990 },

  { name: "C5", category: "OP", start: 1985, end: 2016 },
];

companies.forEach(function (company) {
  console.log(company);
});

companies.forEach((c) => console.log(c)); //Arrow Function

const age = [3, 4, 5, 66, 77, 88, 99, 61, 21, 13, 32, 13];

//filter()

let candr = []; // Without filter()
for (let i = 0; i < age.length; i++) {
  if (age[i] >= 21) {
    candr.push(age[i]);
  }
}
console.log(candr);

// storing result in array and displaying here.
const candrink = age.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});
console.log(candrink);


// Directly filtering and displaying here.
age.filter((a) => {
  if (a > 21) {
    console.log(a);
  }
});


//Below is for arrow function code. filter() returing array and displayin here.
const afun = age.filter((age) => age >= 21);
console.log(afun);


//Filter the retail companies
const retailcompanies = companies.filter(function (company) {
  if (company.category == "Retail") {
    return true;
  }
});
console.log(retailcompanies);

const rc = companies.filter((company) => company.category === "Retail");
console.log(rc);


//Get 80s
const eg = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990,
);
console.log(eg);


//Companies lasted 10 yrs or more
const lastten = companies.filter(
  (company) => company.end - company.start >= 10,
);
console.log(lastten);


//MAP

/*
In this article we would be discussing Map object provided by ES6.
 Map is a collection of elements where each element is stored as a Key, value pair. 
 Map object can hold both objects and primitive values as either key or value.
  When we iterate over the map object it returns the key,value pair in the same order as inserted.
*/

//Create Array of Company names

const companyname = companies.map(function (company) {
  return company.name;
});
console.log(companyname); //Here, it will return array

companies.map((c)=>{
    console.log(c.name);
})


const testmap = companies.map(function (company) {
  return `${company.name} [${company.start}-${company.end}]`;
});
console.log(testmap);

//Sort
const sortedc = companies.sort(function (cone, ctwo) {
  if (cone.start > ctwo.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedc);


//reduce

let agsum = 0;
for (let i = 0; i < age.length; i++) {
  agsum += age[i];
}
console.log(agsum);

const aggs = age.reduce(function (total, age) {
  return total + age;
}, 0);

console.log(aggs);

//Get total years for all companies

const totaly = companies.reduce(function (total, company) {
  return total + (company.end - company.start);
}, 0);
console.log(totaly);


