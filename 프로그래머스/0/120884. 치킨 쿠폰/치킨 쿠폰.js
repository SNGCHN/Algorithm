function solution(chicken) {
    let coupons = chicken;
    let serviceChicken = 0;
    
    while (coupons>=10) {
        let newChicken = Math.floor(coupons / 10);
        serviceChicken += newChicken;
        coupons = newChicken + (coupons % 10);
    }
    return serviceChicken
}