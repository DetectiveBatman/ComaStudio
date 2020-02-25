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
            <span>${enTitle}</span>
          </div>

          <p>${enDescription}</p>
          <div class="audio-div">
          <audio class="audio-player" preload="auto" controls>
              <source class="audio-file" src="../lib/radio/${file}" type="audio/mpeg">
              Your browser doesn't support this feature. Use another browser.
          </audio>
          </div>
        </li>
        `;

        $("#podcast-ul").append(element);
      }
    } else {
      alert('Error!');
    }
  });
});
