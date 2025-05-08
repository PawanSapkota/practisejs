console.log("this is day 2");

const rotateArray = (array, k) => {
    console.log(array.length)

    for (let i = 0; i < k; i++) {
        let temp = array[array.length - 1];
        for (let j = array.length - 1; j > 0; j--) {
            array[j] = array[j - 1];
        }
        array[0] = temp;
    }
    return array

}
console.log(rotateArray([1,2,3,4,5,6,7],3))


const twoSum = (nums, target)=>{
    const map = new Map();

    for(i=0; i< nums.length; i++){

        const subtract = target - nums[i]

        if(map.has(subtract)){
            return [map.get(subtract),i]
        }else{
            map.set(nums[i],i)
        }
        
    }

}

console.log(twoSum([2,7,11,15],9))