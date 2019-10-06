var categories = {
  photography: 'آتلیه عکاسی',
  music: 'ضبط و میکس',
  film: 'فیلم و فیلم کوتاه',
  modeling: 'طراحی و مدل سازی',
  media: 'مدیا',
  ads: 'تبلیغات',
  branding: 'برندسازی',
  visualIdentity: 'هویت بصری',
  festival: 'نمایشگاه',
}

var subcategories = {
  photography: 'آتلیه عکاسی',
  music: 'ضبط و میکس',
  film: 'فیلم و فیلم کوتاه',
  modeling: 'طراحی و مدل سازی',
  media: 'مدیا',
  ads: 'تبلیغات',
  branding: 'برندسازی',
  visualIdentity: 'هویت بصری',
  festival: 'نمایشگاه',
}

$(document).ready(() => {
  $.post('/api/getPortfolio', (response) => {
    if (response.ok == 'true') {
      var items = response.res;
      console.log(response);
      for (let i = 0; i < items.length; i++){
        var item = items[i];
        let img = `../lib/assets/${item.img}.jpg`;
        let category = item.category;
        let subcat = item.subcat;
        let title = item.title;

        let elements = `
        <!-- single work -->

        <div class="col-md-4 col-sm-6 ${subcat} ${category}">
            <a href="single-project.html" class="portfolio_item">
                <img src="${img}" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                    <div class="portfolio-border clearfix">
                        <div class="item_info">
                            <span>${title}</span>
                            <em>${subcategories.subcat} / ${categories.category}</em>
                        </div>
                    </div>
                </div>
            </a>
        </div>

        <!-- end single work -->
        `;

        $(".portfolio_container").append(elements);
      }

    } else {
      alert('ناموفق بود...')
    }
  });
});
