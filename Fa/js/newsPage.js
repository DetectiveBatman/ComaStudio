$(document).ready(() => {
  $.post('/api/getNews', (response) => {
    if (response.ok == 'true'){
      console.log(response);
      for (let i = 0; i < response.res.length; i++){
        let news = response.res[i];
        let title = news.title;
        let id = news.id;
        let photo = news.photo;
        let backPhoto = news.backPhoto;
        let slice = news.text.slice(0, 400);
        let words = slice.split(' ');
        let preview = news.text.slice(0, 398 - [words.length - 1].length) + '...';
        let date = news.date;
        let type = news.type;

        let element = `
        <li class="newsPage-li ${type}">
            <img class="newsPage-img" src="../lib/assets/${photo}">
            <a class="newsPage-a" href="/Fa/newsPage?newsId=${id}">
              <span class="newsPage-title">${title}</span>
              <span class="newsPage-preview">${preview}</span>
            </a>
        </li>`;

        $("#newsPage-ul").append(element);

      }

      document.title = 'اخبار - کما استودیو';
      //$(".top-bar").css('background', `-webkit-linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${backPhoto})`);
      //$(".top-bar").css('background', `linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${backPhoto})`);
    } else {
      alert('لطفا دوباره تلاش کنید.');
    }

    var posts = $('.newsPage-li');
    var defcat = $(".news-cats div li a .active").data('filter');

    posts.filter(defcat).show();

    $(".news-cats div li a").click(function() {
      // Get data of category
      var customType = $(this).data('filter'); // category
      $(".active").attr('class', '');
      $(this).attr('class', 'active');
      posts.hide();
      posts.filter(`${customType}`).show();
    });

  });
});
