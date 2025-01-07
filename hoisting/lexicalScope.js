// that means parent child relation like look at the below
function raju(){
    let a = 10 + 20;
    console.log(a+' ');

    function popi(){
        let b = 'popi'
        console.log(a + ' ' + b + ' is my twin sister');
    }

    popi()
}

// that means this is lexial scope
raju()