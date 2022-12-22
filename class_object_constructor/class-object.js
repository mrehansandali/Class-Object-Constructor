///////////////////////////////////////////////
///////////////ASSINGMENT # 1//////////////////
///////////////////////////////////////////////

class PersonAccount {
    fName;
    lName;
    incomes;
    expenses;

    constructor (fName, lName, incomes, expenses){
        this.fName = fName;
        this.lName = lName;
        this.incomes = incomes;
        this.expenses = expenses;
     }

    totalIncome() {
        let total_income = 0;
        
        for (let i = 0; i < this.incomes.length; i++) {
            let obj = this.incomes [i]
            total_income += obj['income']
        }
        return total_income
    }
    totalExpense(){
        let total_expense = 0;
        for (let i = 0; i <this.expenses.length; i++) {
            let expenseobj = this.expenses[i];
            total_expense += expenseobj["expense"]
        }
        return total_expense
    }
    accountBalance (){
        return (this.totalIncome() - this.totalExpense())
    }
    addIncome(income_amt,income_desc){
        this.incomes.push({income:income_amt, desc: income_desc})
    }
    addExpense(expense_amt,expense_desc){
        this.expenses.push({expense:expense_amt, desc: expense_desc})
    }
}

person1 = new PersonAccount ('Rehan', 'Sandali', [{income : 20000, desc : "salary"}, {income : 2000, desc : "pocket money"}], [{expense : 5000, desc : "party"},{ expense : 10000, desc : "traveling"}] )

console.log(person1.totalIncome() + " there is a total income !")
console.log(person1.totalExpense() + " there is a total expense !")
console.log(person1.accountBalance())
person1.addIncome(100000,"Sold Property")
person1.addExpense(50000,"Purchased Ring for Friend")
console.log(person1.totalIncome()+ " there is a total income !")
console.log(person1.totalExpense() + " there is a total expense !")
console.log(person1.accountBalance())




//////////////////////////////////////////////////
/////////////////ASSINGMETN # 2///////////////////
//////////////////////////////////////////////////


class Automobile{
    name;
    model;
    color;
    engine_type;
    constructor(name,model,color,engine_type){
        this.name =name
        this.model= model
        this.color = color
        this.engine_type = engine_type
    }
    start(){
        console.log(`${this.name}  is ready for drive`)
    }
    opendoor(){
        console.log("door is open")
    }
}

auto1 = new Automobile("Auto1","2022","Grey","Automatic")
auto2 = new Automobile("Auto2","2021","Grey","Automatic")
auto3 = new Automobile("Auto3 ","2020","Grey","Automatic")
auto4 = new Automobile("Auto4","2019","Grey","Automatic")

console.log(auto1.model)
console.log(auto2.model)
console.log(auto3.model)
console.log(auto4.model)
auto1.start()


class Automobile_Car extends Automobile{

    maxspeed;
    doors;

    constructor(name,model,color,engine_type,maxspeed,doors)
    {
        super(name,model,color,engine_type)
        this.maxspeed= maxspeed
        this.doors = doors
    }

    on_AC(){
        console.log("AC is on now")
                }
    fillTank(){
        console.log("Tank is filling")
    }
}
car1 = new Automobile_Car("ca1name",'car1model','car1color',"car1engine",'200','4')

class Automobile_Bus extends Automobile{}

class Automobile_Truck extends Automobile{}