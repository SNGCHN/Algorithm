function solution(myString, pat) {
    let count = 0, index = 0;
    while ((index = myString.indexOf(pat, index)) !== -1) {
        count++;
        index++;
    }
    return count;
}