function sortedFrequency(arr, num) {
    let firstId = findFirst(arr, num);
    if (firstId == -1) return firstId;
    let lastId = findLast(arr,num);
    return lastId - firstId + 1;
}

const findFirst = (arr, num, low = 0, high = arr.length - 1) => {
    if (high >= low) {
        let mid = Math.floor((high + low) / 2)
        if ((mid === 0 || num > arr[mid - 1]) && arr[mid] == num) {
            return mid;
        }   else if (num > arr[mid]) {
            return findFirst(arr,num,mid+1, high)
        }   else {
            return findFirst(arr,num,mid-1)
        }
    }
    return -1
}

const findLast = (arr, num, low = 0, high = arr.length - 1 ) => {
    if (high >= low) {
        let mid = Math.floor((high + low) / 2)
        if ((mid === 0 || num < arr[mid - 1]) && arr[mid] === num) {
            return mid;
        }   else if (num < arr[mid]) {
            return findLast(arr, num, low, mid - 1 )
        }   else {
            return findLast(arr, num, mid + 1, high )
        }
    }
    return -1
}

module.exports = sortedFrequency