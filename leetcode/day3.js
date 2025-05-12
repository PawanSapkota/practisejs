console.log("day3");

function Listnode(val,next){
    this.val = val === undefined ? 0 :val;
    this.next = next === undefined ? null : next;
}

const addTwoNumber = (l1,l2)=>{
    let list = new Listnode(0);
    let head = list;

    let sum = 0;
    let carry = 0

    while( l1 !== null || l2 !== null || sum !== 0 ){
        if( l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }

        if (sum >= 10){
            carry = 1;
            sum = sum - 10;            
        }

        head.next = new Listnode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }
return list.next;

}