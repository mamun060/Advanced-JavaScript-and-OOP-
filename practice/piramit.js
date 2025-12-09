function generatePyramid() {
    var totalNumberofRows = 9;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + ' ';
        }
        console.log(output);
        output = ''
    }
}

generatePyramid();


const pyramid = () =>{
    var finalResult = ''
    for (var i = 1; i<=10 ; i++){
        for (var j = 1; j <= i ; j++){
            finalResult += j + ' ';
        }
        console.log(finalResult)
        finalResult = ''
    }
}

pyramid()