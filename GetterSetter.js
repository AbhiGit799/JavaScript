// set = Keyword


let obj={
    firstName:"Anil",
    lastName:"Kumar",
    set setName(fullName)
    {
      const breakName = fullName.split(" ");
      this.firstName = breakName[0]
      this.lastName = breakName[1]
    },

    get getName()
    {
        return "Hello my name is "+this.firstName +" "+this.lastName
    }


}

obj.setName = "Peter Parker"
console.log(obj.getName); //calling as a property not function



