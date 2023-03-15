async function getData() {
  let url = "https://api.coincap.io/v2/assets";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderData() {
  let currencies = await getData();
  let html = "";
  currencies.data.forEach((currency) => {
    let price = currency.priceUsd;
    let fixed = Number(price).toFixed(2);
    let htmlSegment = `<div class="currency">
                          <h3>Rank: ${currency.rank}</h3>
                          <p>Name: ${currency.name}</p>
                          <p>Price: $ ${fixed}</p>
                      </div>`;

    html += htmlSegment;
  });

  let container = document.querySelector(".container");
  container.innerHTML = html;
}

renderData();
