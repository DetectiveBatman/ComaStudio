$(document).ready(() => {

  $.post('/api/getCategories', (response) => {
    if (response.ok == 'true') {
      let cats = response.res;
      for (let i = 0; i < cats.length; i++) {
        let cat = cats[i];
        let en = cat.en;
        let fa = cat.fa;
        let element = `
        <li><a target="_blank" and rel="noopener noreferrer" href="./category?name=${en}">${en}</a></li>`;
        $(".categories-ul").append(element);
      }

      let element = `
      <li><a  href="./portfolio.html" class="active" data-filter="*">All</a></li>`;
      $(".categories-ul").append(element);
    }
  });

  $.post('/api/getPortfolio', (response) => {
    if (response.ok == 'true') {
      var items = response.res;
      console.log(response);
      for (let i = 0; i < items.length; i++){
        var item = items[i];
        let img = `../lib/assets/${item.img}`;
        let category = item.category;
        let subcat = item.subcat;
        let title = item.enTitle;
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
                            <em style='letter-spacing: 0;'>${category} / ${subcat}</em>
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
      alert('Error');
    }
  });
});
