const pyramid = ()=> {
    let printRow = 20;
    let result = '';

    for(let i = 1 ; i <=printRow ; i++ ){
    for(let j = 1 ; j <= printRow - i ; j++){
        result += " ";
    }
    for(let k = 0; k < 2 * i - 1; k++){
        result += "*";
    }
    result += "\n";
    }


    console.log(result);
}

pyramid()