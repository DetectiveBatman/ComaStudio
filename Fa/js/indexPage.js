$(document).ready(() => {
  $.post('/api/getSubcats', {onlyCategory: true}, (response) => {
    if (response.ok == 'true') {
      var categories = response.res;
      for (let i = 0; i < categories.length; i++) {
        let category = categories[i];
        let photo = category.photos.split(',')[0];
        let enCat = category.enCategory;
        let faCat = category.category;
        let link = category.link != '' ? category.link : `/Fa/category?name=${enCat}`;
        let description = category.description.substr(0, 100) + '...';
        let element = `
        <div class="col-md-6 col-sm-12 photography">
            <a href="${link}" class="portfolio_item">
                <img src="../lib/assets/${photo}" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                    <div class="portfolio-border clearfix">
                        <div class="item_info">
                            <span><div>${faCat}</div></span>
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
