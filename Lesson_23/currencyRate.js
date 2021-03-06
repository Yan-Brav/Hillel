'use strict';
window.addEventListener('load', function () {
    const requestURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
    const select = document.querySelector('#currency');
    const paragraph = document.querySelector('#response p');

    async function getSelected() {
        const selectedValue = select.options[select.selectedIndex].value;
        async function selectCurrency() {
            try {
                const data = await fetch(requestURL);
                const result = await data.json();
                for (let currency of result) {
                    if (currency.ccy === selectedValue) {
                        paragraph.innerText = `${currency.ccy}:
                                            buy ${currency.buy * 1 } UAH / sale ${currency.sale * 1} UAH`
                    }
                }
            } catch (e) {
                paragraph.innerText = 'Something wrong';
            }
        }
        await selectCurrency();
    }
    select.addEventListener('change', getSelected);
});
