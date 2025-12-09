const BinarySearch = () =>{
    const arr = [10,5,28,47,8,4,5,44,5,4,5];
    const target = 44;
    let left = 0;
    let right = arr.length - 1;
    while ( left <= right ) {
        let mid = Math.floor(( left + right ) / 2 );
        
        if(arr[mid] === target ){
            console.log("Searching value are:", target);
        }
        
        if ( arr[mid] < target){
            left = mid + 1 ;
        } else {
            right = mid - 1 ;
        }
    }

    return false;
}

console.log(BinarySearch());