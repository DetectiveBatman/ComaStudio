var url = document.URL;
var username = url.split('?username=')[1];

function getSubcat(subcat){

}

$(document).ready(() => {
  $.post("/api/getUsers", {username: username}, (response) => {
    if (response.ok == 'true'){
      let user = response.res[0];
      $(".top-bar h1").text(user.name);
      document.title = user.name + ' - کما استودیو';
      $("#user-name").text(user.name);
      $("#user-role").text(user.role);
      $("#user-biography").text(user.biography);
      $("#user-profile-photo").attr('src', `../lib/assets/${user.photo}`);
    } else {
      alert('خطایی رخ داده است.');
    }
  });

  $.post("/api/getPortfolio", {artist: username}, (response) => {
    if (response.ok == 'true'){
      let portfolio = response.res;

      for (let i = 0; i < portfolio.length; i++) {
        let art = portfolio[i];
        let subcat = art.subcat;

        $.post('/api/getSubcats', {subcat: subcat}, (subRes) => {
          let faCat = subRes.res[0].category;
          let faSub = subRes.res[0].subcat;

          let element = `
          <!-- single work -->

          <div class="col-md-4 col-sm-6 ${subcat} ${art.category}">
          <a href="single-project.html?id=${art.id}" class="portfolio_item">
          <img src="../lib/assets/${art.img}" alt="image" class="img-responsive" />
          <div class="portfolio_item_hover">
          <div class="portfolio-border clearfix">
          <div class="item_info">
          <span><div>${art.title}</div></span>
          <em style='letter-spacing: 0;'>${faCat} / ${faSub}</em>
          </div>
          </div>
          </div>
          </a>
          </div>

          <!-- end single work -->`;
          $(".portfolio_container").append(element)
        });

      }
    } else {
      alert('خطایی رخ داده است');
    }
  });
});
