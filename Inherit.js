class employee
{
   
    

    constructor()
    {
        
        console.log("Constructor Employee");
    }

    info()
    {
        console.log("Infor Function Employee");

    }
}

class manager extends employee
{
   

    constructor(name,age,salary)
    {
        super();
        this.managname=name;
        this.managage=age;
        this.managsalary=salary;
        console.log("Constructor Manager");

        
        
    }

    Infomanager()
    {
        super.info();

        console.log("Manager Name"+this.managname);

        console.log("Manager Age"+this.managage);

        console.log("Manager Salary"+this.managsalary);

    }

    Print()
    {

     

   document.write(
       `
       <h2>Manager Details</h2>
       <br>

       Name: ${this.managname} <br>

       Age: ${this.managage} <br>

       Salary: ${this.managsalary}<br>
       
       `
   )



   }





}

let a=new manager("Aman",25,20000);

//a.info();

a.Infomanager();

a.Print();










