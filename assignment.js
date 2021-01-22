// https://github.com/hasibcsepstubd/JS-Express

// ================================================================ //
// 1) Kilometer to meter convertor
// ================================================================ // 
function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        var meter = kilometer * 1000;
        return meter;
    }
    else
        return "Invalid input. Please try to input valid parameter.";
}


// ================================================================== //
// 2) Budget Calculator for purchasing Watch, Mobile and Laptop
// ================================================================== //
function budgetCalculator(quantityOfWatch, quantityOfMobile, quantityOfLaptop) {
    
    quantityOfWatch = Math.round(quantityOfWatch);
    quantityOfMobile = Math.round(quantityOfMobile);
    quantityOfLaptop = Math.round(quantityOfLaptop);

    if (quantityOfWatch >= 0 && quantityOfMobile >= 0 && quantityOfLaptop >= 0) {
        const unitPriceOfWatch = 50, unitPriceOfMobile = 100, unitPriceOfLaptop = 500;
        var totalBudget = (unitPriceOfWatch * quantityOfWatch) + (unitPriceOfMobile * quantityOfMobile) + (unitPriceOfLaptop * quantityOfLaptop);
        return totalBudget;
    }
    else
        return "Invalid input. Please try to input valid parameter.";
}


// ==================================================================== //
// 3) Hotel cost calculation according to day
// ==================================================================== //
function hotelCost(stayingDays) {
    
    stayingDays = Math.round(stayingDays);

    if (stayingDays >= 1) {
        var hotelCost = 0;
        if (stayingDays >= 1 && stayingDays <= 10) {
            return hotelCost = 100 * stayingDays;
        }
        else if (stayingDays >= 11 && stayingDays <= 20) {
            return hotelCost = 1000 + (80 * (stayingDays - 10));
        }
        else {
            return hotelCost = 1000 + 800 + (50 * (stayingDays - 20));
        }
    }
    else
        return "Invalid input. Please try to input valid parameter.";
}


// =================================================================== //
// 4) Find out the longest name of my fried from my friends list 
// =================================================================== //
function megaFriend(friendsList = []) {
    if (friendsList.length >= 1) {
        var initialLength = 0;
        var longestName;

        for (var i = 0; i < friendsList.length; i++) {
            if (friendsList[i].length > initialLength) {
                initialLength = friendsList[i].length;
                longestName = friendsList[i];
            }
        }
        return longestName;
    }
    else
        return "Invalid input. Please try to input valid parameter.";
} 