//Array from scratch
class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index){
        return this.data
    }

    push(item) {
        this.data[this.length] = item;
        this.length++
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--
        return lastItem;
    }

    delete(index) {
        const item =this.date[index];
        this.shiftItems(index)
        return this.length
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++ ) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;
    }
}


const newArray = new MyArray();

newArray.push('Hi');
newArray.push('You');
newArray.push('!');

// newArray.pop();
newArray.delete(1);

console.log(newArray);
console.log(newArray.get(0));