$(document).ready(() => {
  $.post('/api/getUsers', (response) => {
    var res = response.res;
    for (let i = 0; i < res.length; i++){
      let user = res[i];
      let profile = user.profile;
      let enName = user.enName;
      let username = user.username;
      let element = `
      <div class="col-md-3 col-sm-6">
          <a href="/En/artist?username=${username}" class="portfolio_item">
              <img src="../lib/assets/${profile}" alt="image" class="img-responsive" />
              <div class="portfolio_item_hover">
                  <div class="portfolio-border clearfix">
                      <div class="item_info">
                          <span><div>${enName}</div></span>
                          <em>Profile</em>
                      </div>
                  </div>
              </div>
          </a>
      </div>`;

      $("#artists-container").append(element);
    }
  });
});
