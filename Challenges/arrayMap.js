const arrayMap = ({ inputArray, targetSum }) => {
    let currentWindow = 0;
    let currentSum = 0;
    
    for (let window = 0; window < inputArray.length; window++) {
        currentSum += inputArray[window];
        while (currentSum > targetSum && currentWindow <= window) {
            currentSum -= inputArray[currentWindow];
            currentWindow++;
        }
        if (currentSum === targetSum) return true; // when the subarray containing the target is found we return true
    }
    return false;
}

const arr = [4, 2, 7, 1, 9, 5, 9, 92, 893, 2, 9, ];
const target = 100; // testing target sum : 17, 24

const result = arrayMap({
    inputArray: arr,
    targetSum: target
});

console.log('====================================');
console.log(result);
console.log('====================================');
