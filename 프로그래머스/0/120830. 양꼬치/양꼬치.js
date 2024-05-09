function solution(n, k) {
    const priceKkochi = 12000;
    const priceDrink = 2000;
    const serviceDrink = Math.floor(n / 10);
    
    const totalKkochi = n * priceKkochi;
    const totalDrink = k * priceDrink;
    
    const discount = serviceDrink * priceDrink;
    
    return totalKkochi + totalDrink - discount;
}