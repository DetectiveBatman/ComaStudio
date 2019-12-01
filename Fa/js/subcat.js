var url = document.URL;
var name = url.split('?name=')[1];
var faName = '';
var category = '';
$(document).ready(() => {

  $.post('/api/getSubcats', {subcat: name}, (response) => {
    if (response.ok == 'true') {
      let subcat = response.res[0];
      faName = subcat.subcat;
      category = subcat.category;
      let header = subcat.header;
      let locElement = `<a href="/Fa">خانه</a> / ${category} / ${faName}`;
      document.title = `${faName} - کما استودیو`;
      $("#top-bar-location").append(locElement);
      $("#top-bar-address").text(faName);
      $(".top-bar").css('background', `-webkit-linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${header})`);
      $(".top-bar").css('background', `linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${header})`);
    }
  });

  $.post('/api/getPortfolio', {subcategory: name}, (response) => {
    if (response.ok == 'true') {
      var items = response.res;
      console.log(response);
      for (let i = 0; i < items.length; i++){
        var item = items[i];
        let img = `../lib/assets/${item.img}`;
        let subcat = item.subcat;
        let title = item.title;
        let id = item.id;
        let elements = `
        <!-- single work -->

        <div class="col-md-4 col-sm-6 ${subcat} ${category}">
            <a href="single-project.html?id=${id}" class="portfolio_item">
                <img src="${img}" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                    <div class="portfolio-border clearfix">
                        <div class="item_info">
                            <span><div>${title}</div></span>
                            <em style='letter-spacing: 0;'>${category} / ${faName}</em>
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
      alert('خطا رخ داده‌ است. لطفا دوباره تلاش کنید');
    }
  });
});
