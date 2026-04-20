
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0]

let target = 8

let ans=search(arr,target);


function search(arr, target) {

    for (i = 0; i <= arr.length; i++) {
        if (arr[i] == target) {
            return true
        }    
    }
    return false
}

if(ans){
    console.log("the element is parsent in array");
}
else{
    console.log("the element is not parsent is array");
}

