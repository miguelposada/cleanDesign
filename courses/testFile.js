let fn = arr => {
    let left = 0, ans = 0, curr = 0;

    for (let right = 0; right < arr.length; right++) {
        // do logic here to add arr[right] to curr

        while (right > 10) {
            // remove arr[left] from curr
            left++;
        }

        // update ans
    }

    return ans;
}

let arre = [1,2,3,4]
console.log(fn(arre));
