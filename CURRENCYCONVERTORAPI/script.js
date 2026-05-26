const API_KEY = "fca_live_CyTiLH2aOEp6Ail4xFKrK57knMtDaaKwa4w5MXfb";

const countryCurrency = {
    india: "INR",
    usa: "USD",
    "united states": "USD",
    europe: "EUR",
    germany: "EUR",
    france: "EUR",
    japan: "JPY",
    china: "CNY",
    uk: "GBP",
    england: "GBP",
    canada: "CAD",
    australia: "AUD"
};

async function convertCurrency() {

    const amount = document.getElementById("amount").value;

    const fromCountry = document.getElementById("from").value.toLowerCase();

    const toCountry = document.getElementById("to").value.toLowerCase();

    const fromCurrency = countryCurrency[fromCountry];

    const toCurrency = countryCurrency[toCountry];

    const CURRENCY_API = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${fromCurrency}`;
       

    const response = await fetch(CURRENCY_API);

    const data = await response.json();

    const rate = data.data[toCurrency];

    const convertedAmount = amount * rate;

    document.getElementById("result").innerText =
        `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}