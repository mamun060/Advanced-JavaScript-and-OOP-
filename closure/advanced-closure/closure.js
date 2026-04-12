function OuterFn(){
    let count = 0;
    function InnerFn(){
        count++;
        console.log(count);
    }
    return InnerFn;
}

OuterFn();
const result = OuterFn();
result();
result();
