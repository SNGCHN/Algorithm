function solution(money) {
    const price = 5500;
    const cup = Math.floor (money / price);
    const remainingMoney = money % price;
    
    return [cup, remainingMoney];
}