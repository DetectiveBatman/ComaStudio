var url = document.URL;
var name = url.split('?username=')[1];
$(document).ready(() => {

  $.post('/api/getArtistPortfolio', {artist: name}, (response) => {
    if (response.ok == true) {
      var items = response.res;
      console.log(response);
      for (let i = 0; i < items.length; i++){
        var item = items[i];
        let img = `../lib/assets/${item.img}`;
        let subcat = item.subcat;
        let enTitle = item.enTitle;
        let id = item.id;
        let elements = `
        <!-- single work -->

        <div class="col-md-4 col-sm-6 ${subcat} ${item.category}">
            <a href="single-project.html?id=${id}" class="portfolio_item">
                <img src="${img}" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                    <div class="portfolio-border clearfix">
                        <div class="item_info">
                            <span><div>${enTitle}</div></span>
                            <em style='letter-spacing: 0;'>${subcat}</em>
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
