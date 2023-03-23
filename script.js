// let url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency?';
// let api_key = '60d8bc34-0290-4b7c-b94b-30537f240f0e';
var row = $('#row');

$.get(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
  function (data) {
    // console.log(data);

    data.forEach((i) => {
      // console.log(i.name);
      let rows = '<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">' + 
      '<td class="px-6 py-4">' + i.market_cap_rank + '</td>' + '<td> <img src="' + i.image + '" style="height: 25px"></td>' + '<td>' + i.name + '</td>' + '<td> $' + i.current_price + '</td>' + '<td>' + i.price_change_percentage_24h + '</td>'  + '<td>' + i.ath_change_percentage + '</td>'  + '<td> $' + i.total_volume + '</td>'  + '<td> $' + i.market_cap + '</td>' 
      
      row.append(rows);
    });
  }
).fail(function () {
  console.error();
  console.log("404");
});
