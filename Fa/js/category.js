var url = document.URL;
var name = url.split('?name=')[1];

var descriptions = {};
var photos = {};


function showSub(sub) {
  $(".category-text").text(descriptions[sub]);
  let photo = photos[sub];
  let photoName = photo.split(',');
  $("#category-photo-1").attr('src', `../lib/assets/${photoName[1]}.jpg`);
  $("#category-photo-2").attr('src', `../lib/assets/${photoName[0]}.jpg`);
  if (sub != "all") {
    $("#subcat-portfolio").attr('href', `/Fa/subcategory?name=${sub}`);
  }
  $("#category-photo-3").attr('src', `../lib/assets/${photoName[2]}.jpg`);
}

$(document).ready(() => {
  $.post('/api/getSubcats', {category: name}, (response) => {
    if (response.ok == 'true') {
      let subcats = response.res;

      for (let i = 0; i < subcats.length; i++) {
        let subcat = subcats[i];
        let enSubcat = subcat.en;
        let faSubcat = subcat.subcat;
        let description = subcat.description;
        let photo = subcat.photos;

        descriptions[enSubcat] = description;
        photos[enSubcat] = photo;

        let element = `<li><a href="" onClick="showSub('${enSubcat}')">${faSubcat}</a></li>`;

        if (enSubcat == "all") {
          element = `<li><a href="" class="active" data-filter="*" onClick="showSub('${enSubcat}')">همه</a></li>`;
          showSub('all');
        }

        $(".portfolio_filter").append(element);
      }

      let subcat = subcats[0];
      let header = subcat.header + '.jpg';
      let locElement = `<a href="/Fa">خانه</a> / ${subcat.category}`;
      document.title = `${subcat.category} - کما استودیو`;
      $("#top-bar-location").append(locElement);
      $("#top-bar-address").text(subcat.category);
      $(".top-bar").css('background', `-webkit-linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${header})`);
      $(".top-bar").css('background', `linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${header})`);

    } else {
      alert('خطا رخ داده‌ است. لطفا دوباره تلاش کنید');
    }
  });
});
