const converterButton = document.querySelector(".convert-button");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dolarToday = 5.02;             //Valor Ficticio

    const convertedValue = inputCurrencyValue / dolarToday;

    console.log(convertedValue);
}

converterButton.addEventListener("click", convertValues);