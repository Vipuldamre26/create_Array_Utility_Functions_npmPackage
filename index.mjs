
// #1
function sumOfArray(arr){
        return arr.reduce((ele, sum) => ele + sum, 0);
}

// #2
function multipleOfArray(arr){
        return arr.reduce((ele, sum) => ele * sum, 1);
}

// #3
function sortArrayByAccending(arr){
        return arr.sort((a, b) => a - b);
}

// #4
function sortArrayByDecending(arr){
        return arr.sort((a, b) => b - a);
}

// #5
function binarySearch(arr, num){

    arr.sort();

    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = start + Math.floor((end - start) / 2);
        if(arr[mid] === num){
            return mid;
        }
        else if(arr[mid] > num){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }

    return -1;
}

// #6
function largestNumInArray(arr){
        let max = arr[0];
        for (let i = 1; i < arr.length; i++)            
         if (arr[i] > max) max = arr[i];
        return max;
}

// #7
function removeDuplicateElements(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }

    }
    return newArr;
}



export { sumOfArray, multipleOfArray, sortArrayByAccending, sortArrayByDecending, binarySearch, largestNumInArray, removeDuplicateElements }


// let arr = [4, 3, 1, 8, 9, 2, 4, 1, 8, 4, 4, 3]
// let func = removeDuplicateElements(arr);
// console.log(func);