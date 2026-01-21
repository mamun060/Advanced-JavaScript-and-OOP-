function isLetter(ch){
    return /^[a-zA-Z]$/.test(ch);
}

function reverseOnlyLetters(str){
    let arr = str.split('')
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        if(!isLetter(arr[left])){
            left++;
        }else if(!isLetter(arr[right])){
            right--;
        }else{
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
}

const stt1 = "ab-cd";
const str2 ="a-bC-dEf-ghIj!!";

console.log(reverseOnlyLetters(stt1));
console.log(reverseOnlyLetters(str2));