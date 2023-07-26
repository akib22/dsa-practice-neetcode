/*
Thought process: Find the rotation point then run two binary search on the both side to find the target.
Rotation point will be when we found a point where the next point is less that point. (nums[i] > nums[i + 1])
*/
function search(nums: number[], target: number): number {
    let rotationPoint = 0;
    
    // finding the rotation point
    let l = 0;
    let r = nums.length - 1;
  
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (nums[mid] > nums[mid + 1]) {
            rotationPoint = mid + 1
            break
        } else if (nums[mid] < nums[l]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    // running binary search on left side
    let l1 = 0
    let r1 = rotationPoint - 1
  
    while (l1 <= r1) {
        let mid = Math.floor((r1 + l1) / 2)

        if (nums[mid] < target) {
            l1 = mid + 1
        } else if (nums[mid] > target) {
            r1 = mid - 1
        } else {
            return mid
        }
    }

    // running binary search on the right side
    let l2 = rotationPoint
    let r2 = nums.length - 1
  
    while (l2 <= r2) {
        let mid = Math.floor((r2 + l2) / 2)

        if (nums[mid] < target) {
            l2 = mid + 1
        } else if (nums[mid] > target) {
            r2 = mid - 1
        } else {
            return mid
        }
    }

    return -1;
};
