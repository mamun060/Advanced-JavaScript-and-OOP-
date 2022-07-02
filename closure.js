function raju(){
    var a = 'Hello closure! How are you?';
    // console.log(b);
    function innermamun(){
        var b = 'Inner Closure!'
        console.log(a,'\n',b)
    }

    innermamun()
}


console.log(raju());