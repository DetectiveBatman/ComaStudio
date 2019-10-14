var categories = {
  photography: 'آتلیه عکاسی',
  music: 'ضبط و میکس',
  film: 'فیلم و فیلم کوتاه',
  modeling: 'طراحی و مدل سازی',
  media: 'مدیا',
  ads: 'تبلیغات',
  branding: 'برندسازی',
  visualIdentity: 'هویت بصری',
  festival: 'نمایشگاه'
}

var subcategories = {
  space: 'فضاسازی',
  logo: 'لوگو'
}

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
      let catItem = `<li><i class="ion-ios-circle-filled"></i> ${categories[category]}</li>`
      $(".cat-ul").append(catItem);
      let subcatItem = `<li><i class="ion-ios-circle-filled"></i> ${subcategories[subcat]}</li>`
      $(".cat-ul").append(subcatItem);
    } else {
      alert('ناموفق بود...')
    }
  });
});
