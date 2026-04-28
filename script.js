const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
// console.log(currencySelect);

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");    // Moeda Inicial
    const currencyValueConverted = document.querySelector(".currency-value");               // Moeda Convertida


    console.log(currencySelect.value);

    const dolarToday = 5.02;             //Valor Ficticio
    const euroToday = 5.85;             //Valor Ficticio

   
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);


}

convertButton.addEventListener("click", convertValues);