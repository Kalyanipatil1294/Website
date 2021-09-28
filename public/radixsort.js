const getMax = (nums) => {
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i]
        }
    }
    return max
}

const countingSort = (arr, exp, max) => {
    const n = arr.length;
    let result = new Array(n + 1).fill(0);
    let count = new Array(max + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const num = Math.floor(arr[i] / exp) % 10;
        count[num]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1]
    }

    for (let i = n - 1; i >= 0; i--) {
        const num = Math.floor(arr[i] / exp) % 10;
        result[count[num] - 1] = arr[i];
        count[num]--;
    }
    for (let i = 0; i < n; i++) {
        arr[i] = result[i];
    }
}

const radixSort = function (nums) {
    let max = getMax(nums);

    for (let i = 1; parseInt(max / i) > 0; i *= 10) {
        countingSort(nums, i, max);
    }
    return nums;
};

const execute = () => {
    const k = 9;
    const n = 1e9;
    const randoms = new Array(n).map(() => Math.floor(Math.random() * k));
    const start = performance.now()
    const num = radixSort(randoms, k);
    const end = performance.now()
    return end - start;
}
console.log(execute())