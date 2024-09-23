function loadfile(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("demo").innerHTML = this.response
        }
    };
    xhttp.open("GET", "test.txt", true);
    xhttp.send();
}