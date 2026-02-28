function reverseOnlyLetters(str) {
  let arr = str.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (!isLetter(arr[left])) {
      left++;
    } else if (!isLetter(arr[right])) {
      right--;
    } else {
      // swap letters
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
}

function isLetter(ch) {
  return /^[a-zA-Z]$/.test(ch);
}


const str = "Test1ng-Leet=code-Q!";
console.log(reverseOnlyLetters(str));