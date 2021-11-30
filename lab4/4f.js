function checkForPrimary(number) {
    if (number === 2) {
        return true;
    } else if (number > 1) {
        for (var i = 2; i < number; i++) {

            if (number % i !== 0) {
                return true;
            } else if (number === i * i) {
                return false
            } else {
                return false;
            }
        }
    } else {
        return false;
    }

}

checkForPrimary(23)