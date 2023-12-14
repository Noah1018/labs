const stocks = JSON.parse(stockData);

// add your code here
document.addEventListener("DOMContentLoaded", () => {
const main = document.querySelector(".container");
    for (const s of stocks) {
        const divItem = document.createElement('div');
        divItem.className = "item";

        const imgSymbol = document.createElement('img');
        imgSymbol.src = `images/logos/${s.symbol}.svg`;
        imgSymbol.title = s.symbol;
        // imgSymbol.addEventListener("click", populate);

        divItem.appendChild(imgSymbol);
        main.appendChild(divItem);
    }

    main.addEventListener("click", function (e) {
        if (e.target.nodeName === 'IMG') {
            populate(e);
        }
    });

    function populate (e) {
        const click = e.target.title;

        const match = stocks.find(stocks => stocks.symbol === click);

        document.querySelector("#logo").innerHTML = ''; 
        const logo = document.createElement('img');
        logo.src = `images/logos/${match.symbol}.svg`;
        document.querySelector("#logo").appendChild(logo);
        document.querySelector("#symbol").textContent = match.symbol;
        document.querySelector("#name").textContent = match.name;
        document.querySelector("#sector").textContent = match.sector;
        document.querySelector("#sub").textContent = match.subIndustry;

    }


});