$(document).ready(() => {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("id");

  $.post('/api/getPortfolio', {id: id}, (response) => {
    if (response.ok == 'true') {
      var item = response.res[0];
      let img = `../lib/assets/${item.largeImg}.jpg`;
      let category = item.category;
      let subcat = item.subcat;
      let title = item.title;
      let description = item.description;

      document.title = title + ' - کما استودیو';
      $("#top-bar-title").text(title);
      $("#top-bar-prtitle").text(title);
      $("#project-title").text(title);
      $("#project-image").attr('src', img);
      $("#project-description").text(description);
    } else {
      alert('ناموفق بود...')
    }
  });
});
