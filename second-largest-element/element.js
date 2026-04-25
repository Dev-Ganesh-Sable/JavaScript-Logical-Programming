
let nums = [22, 43, 57, 76, 92, 78, 17, 6]

// find the largest element in array

const firstLarge = (nums) => {

    let largest = nums[0]  // 92

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i]
        }
    }

    let secondLarge = nums[0]

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > secondLarge && nums[i] < largest) {
            secondLarge = nums[i]
        }
    }
    return secondLarge
}

console.log(firstLarge(nums));