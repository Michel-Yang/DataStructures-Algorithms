function Dictionary(){
    this.add=add;
    this.datastore=new Array();
    this.find=find;
    this.remove=remove;
    this.showAll=showAll;
}

function add(key,value){
    this.datastore[key]=value;
}

function find(key){
    return this.datastore[key];
}

function remove(key){
    delete this.datastore[key];
}
//输出并排序
function showAll(){
    let datakeys=Array.prototype.slice.call(Object.keys(this.datastore));
    console.log(Object.keys(this.datastore))

    console.log(datakeys)

    for(let key in datakeys.sort()){
        console.log(datakeys[key]+"->"+this.datastore[datakeys[key]])
    }
}

let pbook=new Dictionary();
pbook.add("Mike","123");
pbook.add("David","345");
pbook.add("Cynthia","456");

console.log("David's extension:"+pbook.find("David"));

// pbook.remove("David");
pbook.showAll();
