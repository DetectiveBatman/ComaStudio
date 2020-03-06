var url = document.URL;
var username = url.split('?username=')[1];

$(document).ready(() => {
  $.post("/api/getUsers", {username: username}, (response) => {
    if (response.ok == 'true'){
      let user = response.res[0];
      let biography = user.enBiography;
      let photo1 = user.photo1;
      let photo2 = user.photo2;
      let profile = user.profile;

      $(".category-text").text(biography);
      $("#category-photo-1").attr('src', `../lib/assets/${photo1}`);
      $("#category-photo-3").attr('src', `../lib/assets/${photo2}`);
      $("#category-photo-2").attr('src', `../lib/assets/${profile}`);
      $("#subcat-portfolio").attr('href', `/En/artistPortfolio?username=${username}`);
      $(".top-bar h1").text(user.enName);
      document.title = user.enName + ' - Coma Studio';

    } else {
      alert('Error.');
    }
  });
});
