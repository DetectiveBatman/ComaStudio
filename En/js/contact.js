$(document).ready(() => {
  $("#contact-submit").click(() => {
    let email = $("#contact-mail").val();
    let name = $("#contact-name").val();
    let subject = $("#contact-subject").val();
    let text = $("#contact-text").val();
    $.post('/api/message', {email: email, name: name, subject: subject, text: text}, (response) => {
      if (response.ok == true) {
        alert('Done!');
      } else {
        alert('Error occured!');
      }
    });
  });
});
