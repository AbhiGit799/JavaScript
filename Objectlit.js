/*

Array Example

var names=["A","B","C"]

Array is an object

-->We can add function, properties inside
-->Object literal.

*/

var user1={

    email:'abe@gmail.com',

    name:'ABC',



};



var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.name, 'has logged out');
    }
};

userOne.name='Raja';

userOne.login();
userOne.logout();










