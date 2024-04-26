function solution(arr) {
    var sum = 0; // 1. 
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        var average = sum / arr.length;
    }
    return average;
}