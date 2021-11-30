function amountTocoins(amount, coins) {
    let result = "";
    while (amount > 0) {
        if (amount >= 25) {
            amount = amount - coins[0];
            result += coins[0] + ", ";
            continue;
        }
        if (amount >= 10 && amount < 25) {
            amount = amount - coins[1];
            result += coins[1] + ", ";
            continue;
        }
        if (amount >= 5 && amount > 10) {
            amount = amount - coins[2];
            result += coins[2] + ", ";
            continue;
        }
        if (amount >= 2 && amount > 5) {
            amount = amount - coins[3];
            result += coins[3] + ", ";
            continue;
        }
        if (amount === 1) {
            amount = amount - coins[4];
            result += coins[4] + ", ";
        }
    }
    return result;

}
amountTocoins(0, [25, 10, 5, 2, 1])