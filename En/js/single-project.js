$(document).ready(() => {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("id");

  $.post('/api/getPortfolio', {id: id}, (response) => {
    if (response.ok == 'true') {
      var item = response.res[0];
      console.log(item);
      let img = `../lib/assets/${item.largeImg}`;
      let category = item.category;
      let subcat = item.subcat;
      let title = item.enTitle;
      let description = item.enDescription;

      document.title = title + ' - Coma Studio';
      $("#top-bar-title").text(title);
      $("#top-bar-prtitle").text(title);
      $("#project-title").text(title);
      $("#project-image").attr('src', img);
      $("#project-description").text(description);
      let catItem = `<li><i class="ion-ios-circle-filled"></i> ${category}</li>`
      $(".cat-ul").append(catItem);
      let subcatItem = `<li><i class="ion-ios-circle-filled"></i> ${subcat}</li>`
      $(".cat-ul").append(subcatItem);
    } else {
      alert('ناموفق بود...')
    }
  });
});
