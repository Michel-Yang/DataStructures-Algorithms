/* 列表是一组有序的数据。每个列表中的数据项称为元素。
在JavaScript中，列表中的元素可以是任意数据类型。
列表中可以保存多少元素并没有事先限定，实际使用时元素的数量受到程序内存的限制 */

function List(){
    this.listSize=0;
    this.pos=0;
    this.dataStore=[];
    this.clear=clear;
    this.find=find;
    this.toString=toString;
    this.insert=insert;
    this.append=append;
    this.remove=remove;
    this.front=front;
    this.end=end;
    this.prev=prev;
    this.next=next;
    this.hasNext;
    this.hasPrev;
    this.length=length;
    this.currPos=currPos;
    this.moveTo=moveTo;
    this.getElement=getElement;
    this.contains=contains; 
}

function append(element){
    this.dataStore[this.listSize++]=element;
}

function find(element){
    for(let i=0;i<this.dataStore.length;++i){
        if(this.dataStore[i]==element){
            return i;
        }
    }
    return -1;
}

function remove(element){
    let foundAt=this.find(element);

    if(foundAt>-1){
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;
}

function length(){
    return this.listSize;
}

function toString(){
    return this.dataStore;
}

var names=new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");

console.log(names.toString());

names.remove("Raymond")

console.log(names.toString());


function insert(element,after){
    let insertPos=this.find(after);
    if(insertPos>-1){
        this.dataStore.splice(insertPos+1,0,element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear(){
    delete this.dataStore;
    this.dataStore.length=0;
    this.listSize=this.pos=0;
}

function contains(element){
    for(let i=0;i<this.dataStore.length;++i){
        if(this.dataStore[i]==element){
            return true;
        }
    }

    return false;
}

function front(){
    this.pos=0;
}

function end(){
    this.pos=this.listSize-1;
}

function prev(){
    --this.pos;
}

function next(){
    if(this.pos<this.listSize){
        ++this.pos;
    }
}

function currPos(){
    return this.pos;
}

function moveTo(position){
    this.pos=position;
}

function getElement(){
    return this.dataStore[this.pos];
}

function hasNext(){
    return this.pos<this.listSize;
}

function hasPrev(){
    return this.pos>=0;
}

names.front();

console.log(names.getElement())

names.next();

console.log(names.getElement())
