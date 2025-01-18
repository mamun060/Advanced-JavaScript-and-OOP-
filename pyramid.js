const pyramid = () =>{
    let pyramidRow = '';
    for( let i = 1; i<=10 ; i++){
        for(let j = 1; j<=i ; j++){
            pyramidRow += j + ' ';
        }
        console.log(pyramidRow)
        pyramidRow = '';
    }
}

pyramid();