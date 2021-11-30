InputC = document.getElementById("InputC");
InputF = document.getElementById("InputF");
convertCF = document.getElementById("convertCF");
convertFC = document.getElementById("convertFC");

convertCF.addEventListener("click", () => {
    celsiusVal = InputC.value;
    fahrenheitVal = celsiusVal * (9 / 5) + 32;
    InputF.value = fahrenheitVal;
});

convertFC.addEventListener("click", () => {
    fahrenheitVal = InputF.value;
    celsiusVal = ((fahrenheitVal - 32) * 5) / 9;
    InputC.value = celsiusVal;
});