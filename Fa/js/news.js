var url = document.URL;
var id = url.split('?newsId=')[1];

$(document).ready(() => {
  $.post('/api/getNews', {newsId: id}, (response) => {
    if (response.ok == 'true'){
      let news = response.res[0];
      let title = news.title;
      let photo = news.photo;
      let backPhoto = news.backPhoto;
      let text = news.text;
      let date = news.date;

      document.title = title + ' - کما استودیو';
      $("#about-title").text(title);
      $("#news-photo").attr('src', `../lib/assets/${photo}`);
      $("#news-text").text(text);

      $(".top-bar").css('background', `-webkit-linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${backPhoto})`);
      $(".top-bar").css('background', `linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${backPhoto})`);

      let locElement = `<a href="/Fa">خانه</a> / اخبار`;

      $(".top-bar p").append(locElement);
      $(".top-bar h1").text(title);

    } else {
      alert('لطفا دوباره تلاش کنید.');
    }
  });
});
