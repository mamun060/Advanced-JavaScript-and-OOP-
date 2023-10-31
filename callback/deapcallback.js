// this is main function 
function callback( one, two, three ){
    setTimeout(function(){
        one();
    }, 1000)

    setTimeout(function(){
        two();
    }, 4000)

    setTimeout(function(){
        three();
    }, 6000)
}

// callback function one
function score(){
    console.log('This is callback function');
}

// callback function two


// main function call
score();
callback(score , score, score )