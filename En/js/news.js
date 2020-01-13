var url = document.URL;
var id = url.split('?newsId=')[1];

$(document).ready(() => {
  $.post('/api/getNews', {newsId: id}, (response) => {
    if (response.ok == 'true'){
      let news = response.res[0];
      let title = news.enTitle;
      let photo = news.photo;
      let backPhoto = news.backPhoto;
      let text = news.enText;
      let date = news.date;

      document.title = title + ' - Coma Studio';
      $("#about-title").text(title);
      $("#news-photo").attr('src', `../lib/assets/${photo}`);

      text = text.split('<br />');

      for (let i = 0; i < text.length; i++) {
        let part = text[i];
        let element = `
        <span class="news-text">${part}</span>
        `;
        $("#news-container").append(element);
      }

      $(".top-bar").css('background', `-webkit-linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${photo})`);
      $(".top-bar").css('background', `linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${photo})`);

      let locElement = `<a href="/En">Home</a> / News`;

      $(".top-bar p").append(locElement);
      $(".top-bar h1").text(title);

    } else {
      alert('Try again.');
    }
  });
});
