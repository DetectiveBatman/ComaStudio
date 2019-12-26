$(document).ready(() => {

  $.post('/api/getCategories', (response) => {
    if (response.ok == 'true') {
      let cats = response.res;
      for (let i = 0; i < cats.length; i++) {
        let cat = cats[i];
        let en = cat.en;
        let fa = cat.fa;
        let element = `
        <li><a target="_blank" and rel="noopener noreferrer" href="./category?name=${en}">${fa}</a></li>`;
        $(".categories-ul").append(element);
      }

      let element = `
      <li><a  href="./portfolio.html" class="active" data-filter="*">همه</a></li>`;
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
        let title = item.title;
        let id = item.id;
        let elements = `
        <!-- single work -->
        <div class="special-img category-media">
          <div id="category-media-content">
            <img src="${img}" class="category-photo-2" alt="image" class="img-responsive">
          </div>
          <div class="gradient">
            <a class="subcat-portfolio" href="single-project.html?id=${id}">
              <div class="item_info">
                <span><div>${title}</div></span>
                <em style='letter-spacing: 0;'>${item.faCat} / ${item.faSub}</em>
              </div>
            </a>
          </div>
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
