$(document).ready(() => {
  $.post('/api/getRadio', (response) => {
    if (response.ok == 'true'){
      let podcast_items = response.res;
      for (let i = 0; i < podcast_items.length; i++) {
        let podcast = podcast_items[i];

        let file          = podcast.file;
        let title         = podcast.title;
        let enTitle       = podcast.enTitle;
        let description   = podcast.description;
        let enDescription = podcast.enDescription;

        let element = `
        <li>
          <div class="podcast-name">
            <span>${title}</span>
          </div>

          <p>${description}</p>
          <div class="audio-div">
          <audio class="audio-player" preload="auto" controls>
              <source class="audio-file" src="../lib/radio/${file}" type="audio/mpeg">
              مرورگر شما از این قابلیت پشتیبانی نمی‌کند
          </audio>
          </div>
        </li>
        `;

        $("#podcast-ul").append(element);
      }
    } else {
      alert('خطا رخ داده است.');
    }
  });
});
