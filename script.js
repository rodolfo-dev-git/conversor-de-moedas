const converterButton = document.querySelector(".convert-button");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");    // Moeda Inicial
    const currencyValueConverted = document.querySelector(".currency-value");            // Moeda Convertida

    const dolarToday = 5.02;             //Valor Ficticio

    const convertedValue = inputCurrencyValue / dolarToday;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue);

}

converterButton.addEventListener("click", convertValues);