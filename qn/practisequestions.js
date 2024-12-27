console.log("pracisequestions");

// make this olleh nawanp
const str = "Hello Pawan"

let x = str.split(" ").map((value)=>{
  return   value.split('').reverse().join("")
 
})
console.log(x)
console.log(x.join(" "))


// how  to check if an object is array or not
function checkArray(value){
    return Array.isArray(value)
}
console.log(checkArray([]));
console.log(checkArray({}));

// how to empty an array in js do not reset it in a new array  and donot loop through to pop each value
const array = [1,2,3,4,5];
const all = [...array]
console.log("all",all)
console.log(array.splice(0,all));


let a = 12.5

if(a%1 === 0){
    console.log("it is integer")
}
else {
    console.log("it is not integer")
}

// reverse the number
function reverse(nums){
   return nums.reverse();
}
console.log((reverse([1,2,3,4,5])))


// reverse the number by looping
const reverseNumber = (nums)=>{
    const rev = [];
    for ( i = nums.length -1; i>= 0; i--){
        rev.push(nums[i])
    }
    return rev;
}
console.log(reverseNumber([5,10,15,20]));

 function reverses(nums){
    return nums.split(" ");
 }

 console.log(reverses("abc"))

 function reverses1(str) {
    return str.split(""); // Splits the string into individual characters
}

console.log(reverses1("abcz"));

// reverse this number 
const reversingNumber = (num)=>{
    let value = num.toString();
    let string = ''
    for(let i = value.length - 1 ; i>= 0 ; i--){
        string += value[i]

    }
    return  parseInt(string);
}
console.log(reversingNumber(4562332));

// const reverse the array of each element
const reverseEachElement = (arr)=>{

    const value = [];
    for(let i = 0; i < arr.length; i++ ){
        let str = arr[i].toString();

        let reverseString = '';

        for(let j = str.length - 1; j >= 0; j--){
            reverseString += str[j]
            console.log("reverse",reverseString)
        }
        value.push(parseInt (reverseString));
           
    }
    return value; 
}
console.log(reverseEachElement([234343,7879]));


// const reverse the array of each element by modulous
const reverseByModulus = (nums)=>{
    let result = [];

    nums.forEach((element)=>{
        let num = element;
        let reverse = 0;


        while (num > 0){
            let remainder = num % 10;
             reverse = reverse  * 10 + remainder;
             num = Math.floor(num / 10)
        }

        return result.push(reverse);
    })
    return result;

}
console.log(reverseByModulus([9583527,76865]))


const arrays = [12,34,56];

arrays.forEach((element)=> console.log(element));

arrays.map((value)=>console.log(value))


const removeDuplicate = (value)=>{

    let result = [];
    let num

    for(i=0;i< value.length; i++){
         num = value[i];

         if(!result.includes(num)){
            result.push(num)
         }       
    }
    return result;
}

console.log(removeDuplicate([2,1,1,3,4,3,4,5,2,5]))


// find the second largest number from the array

const findSecondLargest = (array)=>{
    const unique = Array.from(new Set(array));

    unique.sort((a,b)=>{
        return b-a;
    })
    if(unique.length >= 2){
        return unique[1]
    }else{
        return - 1
    }
}
console.log(findSecondLargest([2,6,5,9,8,9,8]))
console.log(findSecondLargest([5,10,10]))


const findLargestNumber = (value)=>{
    let number = value[0];
    

    for(let i=1;i < value.length ; i++){
         if( value[i] > number ){
            number = value[i]
         }  

    }
    return number
    
}

console.log(findLargestNumber([2,9,6,30,20]))