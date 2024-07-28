const exchangeRates = {
    USD: { USD: 1, BRL: 5.64, EUR: 0.92, GBP: 0.78, JPY: 153.74, ARS: 928.11 },
    BRL: { USD: 0.18, BRL: 1, EUR: 0.16, GBP: 0.14, JPY: 27.17, ARS: 164.66 },
    EUR: { USD: 1.09, BRL: 6.13, EUR: 1, GBP: 0.85, JPY: 166.72, ARS: 1009.00 },
    GBP: { USD: 1.29, BRL: 7.26, EUR: 1.18, GBP: 1, JPY: 197.63, ARS: 1193.13 },
    JPY: { USD: 0.0065, BRL: 0.037, EUR: 0.0060, GBP: 0.0051, JPY: 1, ARS: 6.05 },
    ARS: { USD: 0.0011, BRL: 0.0061, EUR: 0.00099, GBP: 0.00084, JPY: 0.17, ARS: 1 }
};

const currencySymbols = {
    USD: '$',
    BRL: 'R$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    ARS: '$'
};

function formatCurrency(amount, currency) {
    return `${currencySymbols[currency]} ${amount.toFixed(4)}`;
    
}

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount < 0) {
        document.getElementById('result').textContent = "Insira um valor válido!";
        return;
    }

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    const formattedAmount = formatCurrency(convertedAmount, toCurrency);
    document.getElementById('result').textContent = `Valor convertido: ${formattedAmount}`;
}