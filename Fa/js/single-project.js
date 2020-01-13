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
      let title = item.title;
      let description = item.description.split("<br />");
      for (let i = 0; i < description.length; i++) {
        let part = description[i];
        let element = `
        <p class="project-description">${part}</p>
        `;
        $("#description-parent").append(element);
      }

      document.title = title + ' - کما استودیو';
      $("#top-bar-title").text(title);
      $("#top-bar-prtitle").text(title);
      $("#project-title").text(title);
      $("#project-image").attr('src', img);
      let catItem = `<li><i class="ion-ios-circle-filled"></i> ${item.faCat}</li>`
      $(".cat-ul").append(catItem);
      let subcatItem = `<li><i class="ion-ios-circle-filled"></i> ${item.faSub}</li>`
      $(".cat-ul").append(subcatItem);
    } else {
      alert('ناموفق بود...')
    }
  });
});
