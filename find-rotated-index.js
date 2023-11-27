function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr)
    if ( pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
        return linearSearch(arr, num, 0, pivot - 1)
    } else {
        return linearSearch(arr, num, pivot, arr.length - 1);
    }
    
}

function linearSearch(arr,val) {
    let leftIdx = 0;
    let rightIdx  = arr.length - 1;
    while(leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        if (middleVal < val ) {
            leftIdx = middleIdx + 1;
        }   else if (middleVal > val ) {
            rightIdx = middleIdx - 1;
        }   else {
            return middleIdx;
        }
    }
    return - 1; 
} 

function findPivot(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end){
        let mid  = Math.floor((start + end) / 2);
        
        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid + 1;
        }    else if (mid > start && arr[mid] < arr[mid - 1]) {
                return mid;
        }

        if  (arr[start] >= arr[mid]) {
            end = mid - 1;
        }   else {
            start = mid + 1;
        }
    }

}
return 0;

module.exports = findRotatedIndex