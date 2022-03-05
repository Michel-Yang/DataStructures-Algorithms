/* 对象通过如下方式创建
定义包含属性和方法声明的构造函数
并在构造函数后紧跟方法的定义 
this关键字用来将方法和属性绑定到一个对象的实例上
*/

function Checking(amount){
    this.balance=amount;
    this.deposit=deposit;
    this.withdraw=withdraw;
    this.toString=toString;
}

function deposit(amount){
    this.balance+=amount;
}

function withdraw(amount){
    if(amount<=this.balance){
        this.balance-=amount;
    }
    if(amount>this.balance){
        console.log("Insuffivient funds");
    }
}

function toString(){
    return "Balance:"+this.balance;
}

var account=new Checking(500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(750);
console.log(account.toString(0));
account.withdraw(800);
console.log(account.toString());