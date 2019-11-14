var url = document.URL;
var name = url.split('?name=')[1];
var faName = '';
var category = '';
$(document).ready(() => {

  $.post('/api/getSubcats', {subcat: name}, (response) => {
    if (response.ok == 'true') {
      faName = response.res[0].subcat;
      category = response.res[0].category;
    }
  });

  $.post('/api/getPortfolio', {subcategory: name}, (response) => {
    if (response.ok == 'true') {
      var items = response.res;
      console.log(response);
      for (let i = 0; i < items.length; i++){
        var item = items[i];
        let img = `../lib/assets/${item.img}.jpg`;
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
                            <span>${title}</span>
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

  /* $.post('/api/getPortfolio', {category: name} , (response) => {
    if (response.ok == 'true') {
      var items = response.res;
      console.log(response);
      for (let i = 0; i < items.length; i++){
        var item = items[i];
        let img = `../lib/assets/${item.img}.jpg`;
        let category = item.category;
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
                            <span>${title}</span>
                            <em style='letter-spacing: 0;'>${categories[category]} / ${subcategories[subcat]}</em>
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
  let height = $("#category-descriptions").height() + 120;
  $("#category-item-div").css('margin-top', height);*/
});
