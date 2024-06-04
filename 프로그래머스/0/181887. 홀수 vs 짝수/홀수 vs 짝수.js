function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) {
            evenSum += num_list[i];
        } else {
            oddSum += num_list[i];
        }
    }
    
    if (oddSum >= evenSum) {
        return oddSum;
    } else {
        return evenSum;
    }
}
