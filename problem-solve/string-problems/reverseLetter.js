function reverseLetter(S){
    let str = '';
    for(let i = S.length - 1 ; i >= 0 ; i--){
        str += S[i];
    }
    return str;
}

const str = "test!!!";
console.log(reverseLetter(str));
