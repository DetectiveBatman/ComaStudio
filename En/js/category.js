var url = document.URL;
var name = url.split('?name=')[1];

var descriptions = {};
var photos = {};


function showSub(sub) {
  $(".category-text").text(descriptions[sub]);
  let photo = photos[sub];
  let photoName = photo.split(',');
  $("#category-photo-1").attr('src', `../lib/assets/${photoName[1]}`);
  if (sub != "all") {
    $("#category-photo-2").attr('src', `../lib/assets/${photoName[0]}`);
    $("#subcat-portfolio").attr('href', `/En/subcategory?name=${sub}`);
    $("#portfolio-show").css('display', 'block');
    $("#category-photo-sec").css('display', 'none');
  } else {
    $("#category-photo-sec").css('display', 'block');
    $("#category-photo-sec").attr('src', `../lib/assets/${photoName[0]}`);
    $("#portfolio-show").css('display', 'none');
  }
  $("#category-photo-3").attr('src', `../lib/assets/${photoName[2]}`);
}

$(document).ready(() => {
  $.post('/api/getSubcats', {category: name}, (response) => {
    if (response.ok == 'true') {
      let subcats = response.res;

      for (let i = 0; i < subcats.length; i++) {
        let subcat = subcats[i];
        let enSubcat = subcat.en;
        let faSubcat = subcat.subcat;
        let description = subcat.enDescription;
        let photo = subcat.photos;

        descriptions[enSubcat] = description;
        photos[enSubcat] = photo;

        let element = `<li><a href="#" onClick="showSub('${enSubcat}')">${enSubcat}</a></li>`;

        if (enSubcat == "all") {
          element = `<li><a href="#" class="active" data-filter="*" onClick="showSub('${enSubcat}')">All</a></li>`;
          showSub('all');
        }

        $(".portfolio_filter").append(element);

        if (enSubcat == 'all') {
          let header = subcat.header;
          $(".top-bar").css('background', `-webkit-linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${header})`);
          $(".top-bar").css('background', `linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${header})`);
        }
      }

      let subcat = subcats[0];
      let locElement = `<a href="/En">Home</a> / ${subcat.enCategory}`;
      document.title = `${subcat.enCategory} - Coma Studio`;
      $("#top-bar-location").append(locElement);
      $("#top-bar-address").text(subcat.category);


    } else {
      alert('Error');
    }
  });
});
