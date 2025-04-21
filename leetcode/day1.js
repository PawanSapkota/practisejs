console.log("this is day 1");
const isPalindrome =(int)=>{
    
    if(int<0) return "Not Palindrome";
    let rev = 0;
    let num = int;
    while (num > 0) {
        let lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
    if (rev === int){
        return "Palindrome"
    }else{
        return "Not Palindrome"
    }
}
console.log(isPalindrome(-121))


const removeElement = (nums,val)=>{
    let k =0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;

    
}
console.log(removeElement([0,1,2,2,3,0,4,2],2))


const merge = (nums1, m, nums2, n) => {
    let i = m - 1;
    console.log(i,"i")
    let j = n - 1;
    console.log(j,"j")
    let k = m + n - 1;
    console.log(k,"k")
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    return nums1;
};                                                                              
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))   