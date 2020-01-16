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

      
        let newDes = '';
        let stars = 0;
        for (let i = 0; i < text.length; i++) {
          let letter = text[i];
          if (letter == '*') {
            stars += 1;
            if (stars % 2 == 0) {
              newDes += '</b>';
            }
            else {
              newDes += '<b>';
            }
          }
          else {
            newDes += letter;
          }
        }
      newDes = newDes.split('<br />');

      for (let i = 0; i < newDes.length; i++) {
        let part = text[i];
        let element = `
        <span class="news-text">${part}</span>
        `;
        $("#news-container").append(element);
      }

      $(".top-bar").css('background', `-webkit-linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${photo})`);
      $(".top-bar").css('background', `linear-gradient( rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(../../lib/assets/${photo})`);

      let locElement = `<a href="/Fa">خانه</a> / اخبار`;

      $(".top-bar p").append(locElement);
      $(".top-bar h1").text(title);

    } else {
      alert('لطفا دوباره تلاش کنید.');
    }
  });
});
