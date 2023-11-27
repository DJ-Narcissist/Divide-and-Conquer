function findFloor(arr, x) {    
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;

    while ( left <= right) {
        let mid = Math.floor((left + right) /2 );
        let midVal = arr[mid];

        if (midVal === x) {
            return midVal;

        }   else if (midVal < x) {
            floor = midVal;
            left = mid + 1;

        }   else {
            right = mid - 1;
        }
    }
    return floor;
}

module.exports = findFloor