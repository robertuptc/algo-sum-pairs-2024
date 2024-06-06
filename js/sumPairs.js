exports.sumPairs = function(intArr, desiredNum) {
    let answer = []
    
    for (let i = 0; i < intArr.length; i++) {
        for (let j = i + 1; j < intArr.length; j++) {
            if (intArr[i] + intArr[j] == desiredNum) {
                answer.push([intArr[i], intArr[j]])
            }
        }
    }
    return !answer.length ? answer : 'unable to find pairs'
};
