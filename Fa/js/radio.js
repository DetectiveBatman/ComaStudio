$(document).ready(() => {
  $.post('/api/getRadio', (response) => {
    if (response.ok == 'true'){
      let podcast = response.res[0];
      let file = podcast.file;
      let description = podcast.description;
      $("#radio-description").text(description);
      $("#audio-file").attr('src', `../lib/radio/${file}`);
    } else {
      alert('خطا رخ داده است.');
    }
  });
});
