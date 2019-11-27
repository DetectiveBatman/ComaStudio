$(document).ready(() => {
  $.post('/api/getRadio', (response) => {
    if (response.ok == 'true'){
      let podcast = response.res[0];
      let file = podcast.file;
      let description = podcast.description;
      $("#radio-description").text(description);
      let audio = `
      <div id="audio-div">
      <audio id="audio-player" preload="auto" controls>
          <source id="audio-file" src="../lib/radio/${file}" type="audio/mpeg">
          مرورگر شما از این قابلیت پشتیبانی نمی‌کند
      </audio>
      </div>`;
      $(".main-container").append(audio);
    } else {
      alert('خطا رخ داده است.');
    }
  });
});
