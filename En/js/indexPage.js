$(document).ready(() => {
  var news = `
  <!-- single work -->
  <div class="col-md-3 col-sm-6" id="news-extra-square">
      <a href="/En/news" class="portfolio_item">
          <img src="../lib/assets/3.jpg" alt="image" class="img-responsive" />
          <div class="portfolio_item_hover">
              <div class="portfolio-border clearfix">
                  <div class="item_info">
                      <span><div>News</div></span>
                      <em>News Page</em>
                  </div>
              </div>
          </div>
      </a>
  </div>
  <!-- end single work -->
  `;
  $('.portfolio_container').append(news);


  $.post('/api/getSubcats', {onlyCategory: true}, (response) => {
    if (response.ok == 'true') {
      var categories = response.res;
      for (let i = 0; i < categories.length; i++) {
        let category = categories[i];
        let photo = category.photos.split(',')[0];
        let enCat = category.enCategory;
        let link = category.link != '' ? category.link : `/En/category?name=${enCat}`;
        let description = category.enDescription.substr(0, 100) + '...';
        let size = (i+1) % 3 == 0 ? 6 : 3;
        let element = `
        <div class="col-md-${size} col-sm-${size * 2}">
            <a href="${link}" class="portfolio_item">
                <img src="../lib/assets/${photo}" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                    <div class="portfolio-border clearfix">
                        <div class="item_info">
                            <span><div>${enCat}</div></span>
                            <em>${description}</em>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        `;
        $('.portfolio_container').append(element);
      }
    }
  });
});
