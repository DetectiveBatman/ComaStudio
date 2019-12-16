$(document).ready(() => {
  $.post('/api/getRadio', (response) => {
    if (response.ok == 'true'){
      let podcast = response.res[0];
      let file = podcast.file;
      let description = podcast.enDescription;
      $("#radio-description").text(description);
      let audio = `
      <div id="audio-div">
      <audio id="audio-player" preload="auto" controls>
          <source id="audio-file" src="../lib/radio/${file}" type="audio/mpeg">
          Your browser doesn't support this feature. Use another browser.
      </audio>
      </div>`;
      $(".main-container").append(audio);
    } else {
      alert('Error');
    }
  });
});
