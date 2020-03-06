$(document).ready(() => {
  $.post('/api/getUsers', (response) => {
    var res = response.res;
    for (let i = 0; i < res.length; i++){
      let user = res[i];
      let profile = user.profile;
      let name = user.name;
      let username = user.username;
      let element = `
      <div class="col-md-3 col-sm-6">
          <a href="/Fa/artist?username=${username}" class="portfolio_item">
              <img src="../lib/assets/${profile}" alt="image" class="img-responsive" />
              <div class="portfolio_item_hover">
                  <div class="portfolio-border clearfix">
                      <div class="item_info">
                          <span><div>${name}</div></span>
                          <em>رفتن به پروفایل</em>
                      </div>
                  </div>
              </div>
          </a>
      </div>`;

      $("#artists-container").append(element);
    }
  });
});
