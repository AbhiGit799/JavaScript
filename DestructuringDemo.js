const getUser=()=>{return "Peter"}

const users = ["Anil","Sidhu","Sam","Bhaskar",getUser]

const [x1,x2,...x3] = users

console.log(x1);

console.log(x2);

console.log(x3);

const [y1,y2,y3,y4,y5] = users

console.log(y5());

const UserObj = {
    name:"Ram Kumar",
    age:29,
    city:'Noida',
    getCountry:()=>{return "India"}
}
const {age,name} = UserObj
console.log(name);
console.log(age);

const {getCountry,...others} = UserObj
console.log(others);
console.log(getCountry());


const useState=['1000',()=>{return "return 1000"}]
const [val,setVal] = useState
console.log(val);


