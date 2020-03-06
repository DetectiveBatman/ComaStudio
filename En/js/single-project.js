$(document).ready(() => {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("id");

  $.post('/api/getPortfolio', {id: id}, (response) => {
    if (response.ok == 'true') {
      var item = response.res[0];
      console.log(item);
      let img = `../lib/assets/${item.largeImg}`;
      let category = item.category;
      let subcat = item.subcat;
      let title = item.enTitle;
      let description = item.description.split("<br />");
      for (let i = 0; i < description.length; i++) {
        let part = description[i];
        let element = `
        <p class="project-description">${part}</p>
        `;
        $("#description-parent").append(element);
      }

      if (img.substr(-4) == '.mp4') {
        let aparat = item.aparat;
        let youtube = item.youtube;
        img = `../lib/video/${item.largeImg}`;
        let videoTag =
        `<video id="video-media" controls autoplay>
            <source id="video-src" type="video/mp4" src="${img}">
            your browser doesn't support this feature.
        </video>`;
        $('#media').append(videoTag);
        let youtubeElement =
        `            <div id="youtube-aparat">
                      <button class="video-button"><a href="${aparat}"><i class="fab fa-youtube"></i></a></button>
                      <button class="video-button"><a href="${youtube}"><i class="fab fa-youtube"></i></a></button>
                    </div>`;

        $("#video-description").append(youtubeElement);
      } else {
        $("#project-image").attr('src', img);
      }

      document.title = title + ' - Coma Studio';
      $("#top-bar-title").text(title);
      $("#top-bar-prtitle").text(title);
      $("#project-title").text(title);
      let catItem = `<li><i class="ion-ios-circle-filled"></i> ${category}</li>`
      $(".cat-ul").append(catItem);
      let subcatItem = `<li><i class="ion-ios-circle-filled"></i> ${subcat}</li>`
      $(".cat-ul").append(subcatItem);
    } else {
      alert('ناموفق بود...')
    }
  });
});
