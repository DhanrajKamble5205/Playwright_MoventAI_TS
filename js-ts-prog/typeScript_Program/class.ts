
class Counter {
    count: number;
     constructor (startAt :number){
        this.count = startAt;
     }

     increment():void{
        this.count +=1;
     }
     getCount(): number {
        return this.count
     }
}

let c = new Counter(5);

c.increment();
c.increment();
console.log(c.getCount())