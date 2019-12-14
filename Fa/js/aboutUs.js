$(document).ready(() => {
  $.post('/api/getAboutUs', (response) => {
    let description = response.res[0].description;
    let photoName = response.res[0].photos.split(',');

    $(".category-text").text(description);


    $("#category-photo-1").attr('src', `../lib/assets/${photoName[1]}`);
      $("#category-photo-2").attr('src', `../lib/assets/${photoName[0]}`);
      $("#subcat-portfolio").attr('href', `/Fa/aboutUsBetter`);
      $("#portfolio-show").css('display', 'block');
      $("#category-photo-sec").css('display', 'none');
    $("#category-photo-3").attr('src', `../lib/assets/${photoName[2]}`);

  });
});
