$(document).ready(() => {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("id");

  $.post('/api/getPortfolio', {id: id}, (response) => {
    if (response.ok == 'true') {
      var item = response.res[0];
      let img = `../lib/assets/${item.img}.jpg`;
      let category = item.category;
      let subcat = item.subcat;
      let title = item.title;


    } else {
      alert('ناموفق بود...')
    }
  });
});
